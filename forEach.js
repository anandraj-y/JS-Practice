Array.prototype.polyforEach = function (callback, context) {
  for (let i = 0; i < this.length; i++) {
    callback.call(context, this[i], i, this);
  }
};

let arr = ["a", "b", "c", "d", "e", "f"];

arr.polyforEach((item) => console.log(item));
