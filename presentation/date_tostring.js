let d = new Date(2024,4,6); 

//format of the string depends on the implementation, 
//but it typically includes the date, time, and timezone information.
console.log(d.toString());
//string representing the date portion of the Date object in a human-readable format
console.log(d.toDateString());
// string representing the date and time in UTC (Coordinated Universal Time).
console.log(d.toUTCString());
//locale settings of the user's system
console.log(d.toLocaleString());
