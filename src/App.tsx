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
import {
  BONUS_PAY_DAY_NUMBER,
  CSV_FILE_NAME,
  DATA_DELIMITER,
  NUMBER_OF_MONTHS,
} from "./constants";

function App() {
  const [selectedDate, setSelectedDate] = useState<Moment>(() => moment());

  const salaryDates = useMemo(
    () => calculateSalaryDates(selectedDate, NUMBER_OF_MONTHS),
    [selectedDate]
  );

  const bonusDates = useMemo(
    () =>
      calculateBonusesDates(
        selectedDate,
        NUMBER_OF_MONTHS,
        BONUS_PAY_DAY_NUMBER
      ),
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
      <DateInput onDateChange={setSelectedDate} selectedDate={selectedDate} />
      <PayDates label="Salary pay dates" dates={salaryDates} />
      <PayDates label="Bonus pay dates" dates={bonusDates} />
      <DataExport
        dataToExport={datesToExport}
        exportFileName={CSV_FILE_NAME}
        delimiter={DATA_DELIMITER}
      />
    </div>
  );
}

export default App;
