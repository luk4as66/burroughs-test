import React from "react";
import { PayDatesProps } from "./types";

function PayDates({ dates, label }: PayDatesProps) {
  return (
    <div>
      <p>{label}</p>
      {dates.map((date, index) => {
        return <div key={index}>{date.format("DD-MM-YYYY")}</div>;
      })}
    </div>
  );
}

export default PayDates;
