function Export2PDF() {
  let content_innerhtml: any = document.getElementById("print")?.innerHTML;
  let document_print: any = window.open(
    "_blank",
    "toolbar=no,lcation=no,directories=no,menubar=no,scrollbars=no"
  );
  document_print.document.open();
  document_print.document.close();
  document_print.document.write(
    '<body style="font-family:Calibri(body);  font-size:16px;" onLoad="self.print();self.close();" >'
  );
  document_print.document.write(content_innerhtml);
  document_print.document.write("</body></html>");
  document_print.document.title = "ออกรายงาน";
  document_print.print();
  document_print.close();
}

export default Export2PDF;
