const sleep = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

sleep(1500).then(() => console.log("running after 1500 ms"));
