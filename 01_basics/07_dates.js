// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate)); // object

let myDate = new Date(2024, 0, 27)
console.log(myDate.toDateString()); // sat Jan 27 2024

let myCreatedDate = new Date(2024, 0, 27, 8, 6)
console.log(myCreatedDate.toLocaleString()); // 1/27/2024, 8:06:00 AM

let myTimeStamp = Date.now()

console.log(myTimeStamp);

