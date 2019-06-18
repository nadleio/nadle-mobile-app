import "../functions/Slice_splice";

export const JustAddSign = (start, sign, text) => {
  return new Promise(resolve => {
    const content = text.splice(start, 0, sign);
    resolve(content);
  });
};
