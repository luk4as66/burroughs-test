import React, { useMemo, useState } from "react";
import "./App.css";
import DateInput from "./components/dateInput/dateInput";
import PayDates from "./components/payDates/payDates";
import DataExport from "./components/dataExport/dataExport";
import {
  calculateBonusesDates,
  calculateSalaryDates,
  convertToFormattedDateStringArray,
} from "./dateUtils";
import moment, { Moment } from "moment";
import { CSV_FILE_NAME, DATA_DELIMITER } from "./constants";

function App() {
  const [selectedDate, setSelectedDate] = useState<Moment>(() => moment());
  const salaryDates = useMemo(
    () => calculateSalaryDates(selectedDate, 12),
    [selectedDate]
  );

  const bonusDates = useMemo(
    () => calculateBonusesDates(selectedDate, 12, 15),
    [selectedDate]
  );

  const datesToExport = useMemo(
    () => [
      convertToFormattedDateStringArray(salaryDates),
      convertToFormattedDateStringArray(bonusDates),
    ],
    [salaryDates, bonusDates]
  );

  return (
    <div className="App">
      <DateInput onDateChange={setSelectedDate} />
      <PayDates label="Salary" dates={salaryDates} />
      <PayDates label="Bonus" dates={bonusDates} />
      <DataExport
        dataToExport={datesToExport}
        exportFileName={CSV_FILE_NAME}
        delimiter={DATA_DELIMITER}
      />
    </div>
  );
}

export default App;
