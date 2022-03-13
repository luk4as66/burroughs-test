import React from "react";
import { SalaryDatesProps } from "./types";
import { calculateSalaryDates } from "../../dateUtils";

function SalaryDates({ selectedDate }: SalaryDatesProps) {
  const salaryDates = calculateSalaryDates(selectedDate, 12);
  return (
    <div>
      salary dates:
      {salaryDates.map((date) => {
        return <div>{date.format("DD-MM-YYYY")}</div>;
      })}
    </div>
  );
}

export default SalaryDates;
