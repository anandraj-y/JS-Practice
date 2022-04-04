/**
* Dates in Js can be easily substracted using Date contructor and gives time in millisec
* Date should be a valid date
*/

const dateDifference = (date1Text, date2Text) => {
    const TIME_IN_MILLI_SEC = 24 * 60 * 60 * 1000;
    const date1 = new Date(date1Text);
    const date2 = new Date(date2Text);
    
    const diffTime = Math.abs(date2 - date1);

    // Divide by time in millisec to get a single day
    return Math.ceil(diffTime / TIME_IN_MILLI_SEC);
}

console.log(dateDifference('2022-01-30', '12/1/2020'));
