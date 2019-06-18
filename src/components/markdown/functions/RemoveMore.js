import "./Slice_splice";

export function RemoveMore(start, end, text, number) {
  return new Promise(resolve => {
    const content = text.remainderOfSlice(start - number, start);
    const secondContent = content.remainderOfSlice(end - number, end);
    resolve(secondContent);
  });
}
