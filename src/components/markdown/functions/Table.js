import "../functions/Slice_splice";

export const Table = (text, start, row, column) => {
  return new Promise(resolve => {
    var table = "\n";

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

    const content = text.splice(start, 0, table);

    resolve(content);
  });
};
