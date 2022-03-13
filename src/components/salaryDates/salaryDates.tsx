import React from "react";
import { SalaryDatesProps } from "./types";

function SalaryDates({ salaryDates }: SalaryDatesProps) {
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
