import "./Slice_splice";

export function RemoveOne(start, text) {
  return new Promise(resolve => {
    const content = text.remainderOfSlice(start - 2, start);
    resolve(content);
  });
}
