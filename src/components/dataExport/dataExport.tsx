import React, { useMemo } from "react";
import { DataExportProps } from "./types";
import { createCsvFile } from "./utils";

function DataExport({
  dataToExport,
  exportFileName,
  delimiter,
}: DataExportProps) {
  const csv = useMemo(
    () => createCsvFile(dataToExport, delimiter),
    [dataToExport, delimiter]
  );

  return (
    <a href={csv} download={exportFileName}>
      Export to csv
    </a>
  );
}

export default DataExport;
