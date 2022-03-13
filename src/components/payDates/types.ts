import { Moment } from "moment";

export type PayDatesProps = Readonly<{
  label: string;
  dates: ReadonlyArray<Moment>;
}>;
