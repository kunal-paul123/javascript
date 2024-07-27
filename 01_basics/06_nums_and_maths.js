const score = 400
console.log(score); // 400

const balance = new Number(200.5)
console.log(balance); // [Number: 200.5]

console.log(balance.toString()); // 200.5
console.log(balance.toString().length); // 5

console.log(balance.toFixed(1)); // 200.5
console.log(balance.toFixed(2)); // 200.50

const otherNum = 123.897
console.log(otherNum.toPrecision(3)); // 123
console.log(otherNum.toPrecision(4)); // 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-In")); // 10,00,000

//--------Maths----------

console.log(Math);
console.log(Math.abs(-5)); // 5
console.log(Math.round(5.8)); // 6
console.log(Math.ceil(4.8)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(6.5)); // 6
console.log(Math.min(4,5,8,9,2)); // 2
console.log(Math.max(4,5,8,9,2)); // 9

console.log(Math.random()); // btw 0 to 1

console.log(Math.floor((Math.random() * 6) + 1)); // a random number btw 1 to 6