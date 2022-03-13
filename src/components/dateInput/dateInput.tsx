import React, { ChangeEvent, useCallback } from "react";
import { DateInputProps } from "./types";
import moment from "moment";

function DateInput({ onDateChange }: DateInputProps) {
  const handleDateChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onDateChange(moment(event.target.value));
    },
    [onDateChange]
  );

  return <input onChange={handleDateChange} type="date" />;
}

export default DateInput;
