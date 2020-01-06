import "../functions/Slice_splice";

const Table = (text, start, row, column) => {
  var table = "\n";
  var i = 0;
  var j = 0;

  for (j = 0; j <= column - 1; j++) {
    table = table + "| Sustitute ";
    j == column - 1 && (table = table + "|");
  }

  table = table + "\n";

  for (j = 0; j <= column - 1; j++) {
    table = table + "| --------- ";
    j == column - 1 && (table = table + "|");
  }

  for (i = 0; i <= row - 1; i++) {
    table = table + "\n";

    for (j = 0; j <= column - 1; j++) {
      table = table + "| Sustitute ";
      j == column - 1 && (table = table + "|");
    }
  }

  return text.splice(start, 0, table);
};

export default Table;
