export type DataExportProps = Readonly<{
  dataToExport: ReadonlyArray<ReadonlyArray<string>>;
  delimiter: string;
  exportFileName: string;
}>;
