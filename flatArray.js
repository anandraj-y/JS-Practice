const flatten = (arr) => {
  const outputArr = [];
  const flat = (inputArr) => {
    for (let element of inputArr) {
      if (element instanceof Array) {
        flat(element);
      } else {
        outputArr.push(element);
      }
    }
  };
  flat(arr);
  return outputArr;
};

console.log(
  flatten([1, 2, [3, [4, 5, [6, 7, 8, [9, 10]]]], 11, 12, [13, [[[15]]]]])
);
