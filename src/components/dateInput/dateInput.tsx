import React, { ChangeEvent, useCallback } from "react";
import { DateInputProps } from "./types";
import moment from "moment";
import { MAX_INPUT_YEAR } from "./constants";

function DateInput({ onDateChange, selectedDate }: DateInputProps) {
  const handleDateChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputDate = moment(event.target.value);
      if (inputDate.year() > MAX_INPUT_YEAR) {
        inputDate.year(MAX_INPUT_YEAR);
      }
      onDateChange(inputDate);
    },
    [onDateChange]
  );

  return (
    <input
      data-testid="input-date"
      value={selectedDate.format("YYYY-MM-DD")}
      onChange={handleDateChange}
      type="date"
    />
  );
}

export default DateInput;
