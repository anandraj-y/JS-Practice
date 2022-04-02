/**
 * Clearing all the setIntervals
 */

class Timers {
  constructor() {
    this.intervalIds = [];
  }

  setInterval(f, delay) {
    const id = window.setInterval(fn, delay);
    this.intervalIds.push(id);
    return id;
  }

  clearAllInterval() {
    while (this.intervalIds.length) {
      const id = this.intervalIds.pop();
      window.clearInterval(id);
    }
  }
}

const timer = new Timers();

timer.setInterval(() => {
  console.log("A");
}, 500);
timer.setInterval(() => {
  console.log("B");
}, 7800);
