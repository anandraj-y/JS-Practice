Array.prototype.polymap = function (callback, context) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback.call(context, this[i], i, this));
  }
  return arr;
};

let arr = ["a", "b", "c", "d", "e", "f"];

const copyArr = arr.polymap((item) => {
  return item;
});
console.log(copyArr);
