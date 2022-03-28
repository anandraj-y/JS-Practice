function factorial(n) {
  console.log("factorial is called!!!");
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

const memoize = function (fn) {
  const cache = {};
  return function () {
    const key = JSON.stringify(arguments);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...arguments);
    cache[key] = result;
    return result;
  };
};

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(10));
console.log(memoizedFactorial(10));
