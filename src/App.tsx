import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import DateInput from "./components/dateInput/dateInput";
import SalaryDates from "./components/salaryDates/salaryDates";
import DataExport from "./components/dataExport/dataExport";
import { calculateSalaryDates } from "./dateUtils";
import moment, { Moment } from "moment";

function App() {
  const [selectedDate, setSelectedDate] = useState<Moment>(() => moment());
  const salaryDates = useMemo(
    () => calculateSalaryDates(selectedDate, 12),
    [selectedDate]
  );

  return (
    <div className="App">
      <DateInput onDateChange={setSelectedDate} />
      <SalaryDates salaryDates={salaryDates} />
      <DataExport />
    </div>
  );
}

export default App;
