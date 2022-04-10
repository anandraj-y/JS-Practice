const input = document.querySelector("#input");

const debounceGetProduct = (fn) => {
  let timer;
  return function () {
    clearTimeout(timer);
    const context = this;
    const args = arguments;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, 400);
  };
};

input.addEventListener(
  "keyup",
  debounceGetProduct(function (event) {
    console.log("getting products", event.target.value);
  })
);
