function countNestedArrayElements(arr) {
  let count = 0;
  function elementCounter(inputArr) {
    for (let element of inputArr) {
      if (element instanceof Array) {
        elementCounter(element);
      } else {
        count++;
      }
    }
  }
  elementCounter(arr);
  return count;
}

console.log(
  countNestedArrayElements([1, 2, [3, [4, 5, [6, 7, 8, [9, 10]]]], 11, 12])
);
