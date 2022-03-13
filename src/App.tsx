import React from "react";
import "./App.css";
import DateInput from "./components/dateInput/dateInput";
import SalaryDates from "./components/salaryDates/salaryDates";
import DataExport from "./components/dataExport/dataExport";

function App() {
  return (
    <div className="App">
      <DateInput />
      <SalaryDates />
      <DataExport />
    </div>
  );
}

export default App;
