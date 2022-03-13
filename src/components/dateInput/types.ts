import { Moment } from "moment";

export type DateInputProps = Readonly<{
  selectedDate: Moment;
  onDateChange: (selectedDate: Moment) => void;
}>;
