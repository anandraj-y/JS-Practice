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

const sum = (a) => (b, c, d) => a + b + c + d;
console.log(sum(1)(2, 3, 4));
