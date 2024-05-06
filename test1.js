"use strict"


function calcDaysLeft(){
let startDay = new Date("May 6, 2024"); 
let acadimyEnd = new Date("June 28, 2024");
let capstone = new Date("May 27, 2024");
let msec_per_day = 1000 * 60 * 60 * 24; //milliseconds * seconds*minutes*hours
let elapsedMilliseconds = acadimyEnd.getTime() - startDay.getTime();
let elapsedMilliseconds2 = capstone.getTime() - startDay.getTime();//3/15/2022 - 1/15/2022
let dayDiff = elapsedMilliseconds / msec_per_day;
let dayDiff2 = elapsedMilliseconds2 / msec_per_day; //elapsed milliseconds by the milliseconds per day
let numDays = Math.round(dayDiff); 
let numDays2 = Math.round(dayDiff2);
console.log("The number of days between dates is " + numDays);
console.log("The number of days between dates is " + numDays2);
document.getElementById("days-left").innerHTML = `the number of days till the end of the academy is ${numDays} and for the capstone is ${numDays2}`;
}
