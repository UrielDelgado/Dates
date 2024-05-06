let myBirthday = new Date("9/20/2003");
let sevDays = new Date(myBirthday);

sevDays.setDate(sevDays.getDate() + 7);

console.log(myBirthday.toDateString());
console.log(sevDays.toDateString());
