import { Moment } from "moment";

export type DateInputProps = Readonly<{
  onDateChange: (selectedDate: Moment) => void;
}>;
