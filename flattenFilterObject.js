const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const filterFn = (item) => typeof item === "string";

const filterFlatten = (obj, fn) => {
  for (let key in obj) {
    const val = obj[key];
    if (typeof val === "object") {
      filterFlatten(obj[key], fn);
    } else {
      if (!fn(val)) delete obj[key];
    }
    if (JSON.stringify(val) === "{}") delete obj[key];
  }
};

console.log(filterFlatten(obj, filterFn));
