import "../functions/Slice_splice";

export function RemoveFirst(start, text) {
  return new Promise(resolve => {
    const content = text.remainderOfSlice(start - 4, start + 4);
    resolve(content);
  });
}
