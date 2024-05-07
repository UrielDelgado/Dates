let milliSec = Date.parse("May 1, 2022");

let d = new Date(milliSec); 

let date1 = new Date("January 15, 2022"); 
let date2 = new Date("March 15, 2022"); 
let msec_per_day = 1000 * 60 * 60 * 24; //milliseconds * seconds*minutes*hours
let elapsedMilliseconds = date2.getTime() - date1.getTime(); //3/15/2022 - 1/15/2022
let dayDiff = elapsedMilliseconds / msec_per_day; //elapsed milliseconds by the milliseconds per day
let numDays = Math.round(dayDiff); 

console.log(milliSec)
console.log("The number of days between dates is " + numDays); 