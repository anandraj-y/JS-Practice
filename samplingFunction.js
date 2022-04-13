/**
 * Create a function in JavaScript that accepts a function as input and a count
 * and executes that input function once for a given count of calls. Known as sampling function.
 */

/**
function message(){
  console.log("hello");
}

const sample = sampler(message, 4);
sample();
sample();
sample();
sample(); // this will be executed
sample();
sample();
sample();
sample(); // this will be executed
 
*/

function printMessage() {
  console.log("Hello there!!!!");
}

function sampling(fn, count, context) {
  let counter = 0;
  return function (...args) {
    context = this ?? context; // if left is null then assign the right side to context
    if (++counter !== count) return; // invoke only when number of calls is equal to the counts
    fn.apply(context, args);
    counter = 0;
  };
}

const sample = sampling(printMessage, 3);
sample();
sample();
sample(); // hello world!!!!
sample();
sample();
sample(); // hello world!!!!
sample();
sample();
