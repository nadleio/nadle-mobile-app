import "../functions/Slice_splice";
import { RemoveMore } from "./RemoveMore";

export const CodeBlock = (start, end, text, sign) => {
  return new Promise(resolve => {
    var toSelected = text.substring(start - 4, end + 4);

    if (
      toSelected[0] == sign[0] &&
      toSelected[1] == sign[0] &&
      toSelected[2] == sign[0] &&
      toSelected[toSelected.length - 1] == sign[0] &&
      toSelected[toSelected.length - 2] == sign[0] &&
      toSelected[toSelected.length - 3] == sign[0]
    ) {
      RemoveMore(start, end, text, 4).then(request => {
        resolve({ content: request, erase: true });
      });
    } else {
      var selected = text.substring(start, end);
      const firstContent = text.remainderOfSlice(start, end);

      var writeHere =
        selected == ""
          ? sign[0] +
            sign[0] +
            sign[0] +
            "\n" +
            "" +
            "\n" +
            sign[0] +
            sign[0] +
            sign[0]
          : sign[0] +
            sign[0] +
            sign[0] +
            "\n" +
            selected +
            "\n" +
            sign[0] +
            sign[0] +
            sign[0];

      const content = firstContent.splice(start, 0, writeHere);

      resolve({ content: content, erase: false });
    }
  });
};
