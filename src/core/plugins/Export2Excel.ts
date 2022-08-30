import * as XLSX from "xlsx";
import saveAs from "file-saver";

function fixWidth(data: Array<any>, header: Array<any>) {
  data.unshift(header);

  const colWidth = data.map((row: Array<any>) =>
    Array.from(row).map((val: any) => {
      if (val == null) {
        return {
          wch: 10,
        };
      } else if (val.toString().charCodeAt(0) > 255) {
        return {
          wch: val.toString().length * 2,
        };
      } else {
        return {
          wch: val.toString().length,
        };
      }
    })
  );

  let result = colWidth[0];
  for (let i = 1; i < colWidth.length; i++) {
    for (let j = 0; j < colWidth[i].length; j++) {
      if (result[j]["wch"] < colWidth[i][j]["wch"]) {
        result[j]["wch"] = colWidth[i][j]["wch"];
      }
    }
  }
  return result;
}

function s2ab(s: any) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
}

function Export2Excel(
  filename: string,
  headers: Array<any>,
  excel_data: Array<any>,
  headersIsReal?: boolean
) {
  const excel_header: Array<any> = [[]];

  if (!headersIsReal) {
    headers.forEach((val: any) => {
      excel_header[0].push(val.name);
    });
  } else {
    headers.forEach((val: any) => {
      excel_header[0].push(val);
    });
  }

  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
  XLSX.utils.sheet_add_aoa(ws, excel_header);
  XLSX.utils.sheet_add_json(ws, excel_data, {
    origin: "A2",
    skipHeader: true,
  });

  const colWidth = fixWidth(excel_data, excel_header[0]);
  ws["!cols"] = colWidth;

  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  const wbout = XLSX.write(wb, {
    bookType: "xlsx",
    bookSST: false,
    type: "binary",
  });

  saveAs(
    new Blob([s2ab(wbout)], {
      type: "application/octet-stream",
    }),
    `${filename}.xlsx`
  );
}

export default Export2Excel;
