String.prototype.remainderOfSlice = function(begin, end) {
  begin = begin || 0;
  end = end === undefined ? this.length : end;

  if (this.slice(begin, end) === "") return this + "";
  return this.slice(0, begin) + this.slice(end);
};

String.prototype.splice = function(start, delCount, newSubStr) {
  return (
    this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount))
  );
};
