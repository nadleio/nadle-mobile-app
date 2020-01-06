import "../functions/Slice_splice";

const JustAddSign = (start, sign, text) => {
  const content = text.splice(start, 0, sign);
  return content;
};

export default JustAddSign;
