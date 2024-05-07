let d = new Date(1996,4,16); 

console.log(d.toString());


let daysLater = d.toDateString();

d.setDate(d.getDate() + 7); 

console.log(daysLater.toDateString)