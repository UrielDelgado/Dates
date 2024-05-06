let milliSec = Date.parse("May 1, 2022");

let d = new Date(milliSec); 

let date1 = new Date("January 15, 2022"); 
let date2 = new Date("March 15, 2022"); 
let msec_per_day = 1000 * 60 * 60 * 24; 
let elapsedMilliseconds = date2.getTime() - date1.getTime(); 
let dayDiff = elapsedMilliseconds / msec_per_day; 
let numDays = Math.round(dayDiff); 

//console.log(milliSec)
//console.log("The number of days between dates is " + numDays); 