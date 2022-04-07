/**
 * Currying is a functional programming concept
 * We can pass fn as arguments and retun fn without any side effects
 * sum(1,2,3,4)
 * sum(1,2)(3,4)
 * sum(1,2,3)(4)
 * sum(1)(2,3,4)
 * All should return 10
 */

// const sum = (a, b, c, d) => a + b + c + d;
// console.log(sum(1, 2, 3, 4));

// const sum = (a, b) => (c, d) => a + b + c + d;
// console.log(sum(1, 2)(3, 4));

// const sum = (a) => (b, c, d) => a + b + c + d;
// console.log(sum(1)(2, 3, 4));

/**
 * Currying to check if the inputs are 4
 * This is for checking upto 4 arguments
/**
const sum = (...args) => {
  // spread the arguments into storage array
  const storage = [...args];
  // base case
  // if invoked with 4 arguments
  if (storage.length === 4) {
    return storage.reduce((a, b) => a + b);
  } else {
    // Creating inner function
    const temp = function (...args2) {
      //Pushing the received argments of inner function to storage
      storage.push(...args2);
      //If reached the value then return the value
      if (storage.length === 4) {
        return storage.reduce((a, b) => a + b);
      } else {
        // return the same function referene again
        return temp;
      }
    };
    // return the function reference for the first call
    return temp;
  }
};

console.log(sum(1, 2)(3, 4)); // 10
 */

/**
 * Function curry to return sum when function call is made using empty parenthesis
 */
const sum = (...argments) => {
  const storage = [...argments];
  if (storage.length === 0) {
    return 0;
  } else {
    const temp = (...args2) => {
      if (args2.length === 0) {
        return storage.reduce((a, b) => a + b);
      } else {
        storage.push(...args2);
        return temp;
      }
    };
    return temp;
  }
};

console.log(sum(1, 2)(3, 4, 6, 7, 8)()); // 31
