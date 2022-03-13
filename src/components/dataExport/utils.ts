import { CSV_HEADER } from "./constants";

export const createCsvFile = (
  data: ReadonlyArray<ReadonlyArray<string>>,
  delimiter: string
) => {
  const csvData = data.map((items) => items.join(delimiter)).join("\n");
  return encodeURI(CSV_HEADER + csvData);
};
