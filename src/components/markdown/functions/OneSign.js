import "../functions/Slice_splice";
import { RemoveMore } from "./RemoveMore";

const OneSign = (start, end, text, sign) => {
  return new Promise(resolve => {
    var toSelected = text.substring(start - 1, end + 1);

    if (
      toSelected[0] == sign[0] &&
      toSelected[toSelected.length - 1] == sign[0]
    ) {
      RemoveMore(start, end, text, 1).then(request => {
        resolve({ content: request, erase: true });
      });
    } else {
      var selected = text.substring(start, end);
      const firstContent = text.remainderOfSlice(start, end);

      var writeHere = selected == "" ? sign : sign[0] + selected + sign[0];
      const content = firstContent.splice(start, 0, writeHere);

      resolve({ content: content, erase: false });
    }
  });
};

export default OneSign;
