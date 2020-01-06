import "../functions/Slice_splice";
import { RemoveFirst } from "./RemoveFirst";
import { RemoveMore } from "./RemoveMore";

const TwoSigns = (start, end, text, sign) => {
  return new Promise(resolve => {
    var toSelected = text.substring(start - 2, end + 2);

    if (
      toSelected[0] == sign[0] &&
      toSelected[1] == sign[0] &&
      toSelected[toSelected.length - 1] == sign[0] &&
      toSelected[toSelected.length - 2] == sign[0]
    ) {
      text.length == 4
        ? RemoveFirst(start, text).then(request => {
            resolve({ content: request, erase: true });
          })
        : RemoveMore(start, end, text, 2).then(request => {
            resolve({ content: request, erase: true });
          });
    } else {
      var selected = text.substring(start, end);
      const firstContent = text.remainderOfSlice(start, end);

      var writeHere =
        selected == ""
          ? sign
          : sign[0] + sign[0] + selected + sign[0] + sign[0];
      const content = firstContent.splice(start, 0, writeHere);

      resolve({ content: content, erase: false });
    }
  });
};

export default TwoSigns;
