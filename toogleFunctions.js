/**
 * Create a toggle function in JavaScript that accepts a list of arguments
 * and toggles each of them when invoked in a cycle.
 * @param  {...any} list : list of arguments which we want to toggle.
 * @returns the next input
 */

/**
 *  Input/Output
    let onOff = toggle("on", "off");
    onOff() // "on"
    onOff() // "off"
    onOff() // "on"
 */

const toggle = (...list) => {
  let index = -1;
  const length = list.length;
  return function () {
    index = (index + 1) % length;
    return list[index];
  };
};
toggle("hello", "world");
