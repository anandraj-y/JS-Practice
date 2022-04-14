let isThrottled;

function printScroll() {
  console.log("scrolled !!!!");
}

function throttle(callback, delay) {
  if (isThrottled) return;
  isThrottled = true;
  setTimeout(() => {
    callback();
    isThrottled = false;
  }, delay);
}

window.addEventListener("scroll", () => {
  throttle(printScroll, 250);
});
