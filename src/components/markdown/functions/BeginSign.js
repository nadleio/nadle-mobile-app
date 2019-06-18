import "../functions/Slice_splice";
import { RemoveOne } from "./RemoveOne";

export const BeginSign = (start, end, text, sign) => {
  return new Promise(resolve => {
    var toSelected = text.substring(start - 2, end);

    if (toSelected[0] == sign && sign[0] != "#") {
      resolve(RemoveOne(start, text));
    } else {
      var selected = text.substring(start, end);
      const firstContent = text.remainderOfSlice(start, end);

      var block = sign + " " + selected;
      const content = firstContent.splice(start, 0, block);

      resolve(content);
    }
  });
};
