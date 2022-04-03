/**
 *
 * @param {number} initVal - Value to start
 * @param {number} steps - Increase by how many
 * @returns undefined
 * Uses the concept of closure and timers
 */
const incrementer = (initVal = 0, steps = 1) => {
  let timerId;
  let val = initVal;
  const increment = () => {
    if (!timerId) {
      // timerId check so that we don't start multiple timers
      timerId = setInterval(() => {
        console.log(val);
        val += steps;
      }, 1000);
    }
  };

  const pause = () => {
    clearInterval(timerId);
    timerId = null;
  };

  return {
    increment,
    pause,
  };
};

const fn = incrementer();
fn.increment();
