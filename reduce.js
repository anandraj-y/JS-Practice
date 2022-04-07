/**
 * Creating polyfill for reduce
 */

Array.prototype.reducePoly = function (callback, initVal) {
  let i = 0;
  if (typeof initVal === "undefined") {
    if (!Array.isArray(this)) throw new Error("Not a valid array");
    if (this.length === 0)
      throw new Error("Reduce of empty array with no init");
    initVal = this[i];
    i++;
  }
  for (let j = i; j < this.length; j++) {
    initVal += this[j];
    callback(initVal, this[j], j, this);
  }
  return initVal;
};

console.log(
  [1, 2, 3, 4, 5].reducePoly((acc, val, index, arr) => {
    return acc + val;
  }, 0)
);
