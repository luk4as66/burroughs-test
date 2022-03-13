import React, { useCallback, useState } from "react";
import "./App.css";
import DateInput from "./components/dateInput/dateInput";
import SalaryDates from "./components/salaryDates/salaryDates";
import DataExport from "./components/dataExport/dataExport";
import moment, { Moment } from "moment";

function App() {
  const [selectedDate, setSelectedDate] = useState<Moment>(() => moment());

  return (
    <div className="App">
      <DateInput onDateChange={setSelectedDate} />
      <SalaryDates selectedDate={selectedDate} />
      <DataExport />
    </div>
  );
}

export default App;
