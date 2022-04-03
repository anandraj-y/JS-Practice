/**
 * Clearing all setTimeouts
 */

class ClearTimeouts {
  constructor() {
    this.timerIds = [];
  }

  setTimeout(fn, delay) {
    const id = setTimeout(fn, delay);
    this.timerIds.push(id);
  }

  clearAllTimeout() {
    while (this.timerIds.length) {
      const poppedId = this.timerIds.pop();
      clearTimeout(poppedId);
    }
  }
}

const timeout = new ClearTimeouts();

timeout.setTimeout(() => {
  console.log("A");
}, 1000);

timeout.setTimeout(() => {
  console.log("B");
}, 1500);

timeout.setTimeout(() => {
  console.log("C");
}, 2000);

timeout.clearAllTimeout();
