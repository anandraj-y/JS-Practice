function timeFormatter(time) {
  const lowerCasedTime = time.toLowerCase();
  let [hour, min] = lowerCasedTime.split(":"); // [12, 22pm]
  if (min.endsWith("pm")) {
    hour = hour == 12 ? hour : String(+hour + 12);
  }
  if (min.endsWith("am")) {
    hour = hour == 12 ? "0" : hour;
  }
  debugger;
  return `${hour.padStart(2, 0)}:${min.slice(0, -2).padStart(2, 0)}`;
}

timeFormatter("11:10AM"); // '11:10'
timeFormatter("12:05PM"); //  '12:05'
timeFormatter("10:05PM"); // '22:05'
