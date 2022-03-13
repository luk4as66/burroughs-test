import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import DateInput from "./components/dateInput/dateInput";
import PayDates from "./components/payDates/payDates";
import DataExport from "./components/dataExport/dataExport";
import { calculateBonusesDates, calculateSalaryDates } from "./dateUtils";
import moment, { Moment } from "moment";

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

  return (
    <div className="App">
      <DateInput onDateChange={setSelectedDate} />
      <PayDates label="Salary" dates={salaryDates} />
      <PayDates label="Bonus" dates={bonusDates} />
      <DataExport />
    </div>
  );
}

export default App;
