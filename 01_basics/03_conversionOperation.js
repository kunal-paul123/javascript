let score = null

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = null
let boolean = Boolean(isLoggedIn)
console.log(typeof boolean);
console.log(boolean);

// 1 => true, 0 => flase
// "" => false
// "kunal" => true
// null => false

let someNumber = 55

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);

// 55 => 55

// *********operations*********

let str1 = "hello"
let str2 = " kunal"

let str3 = str1 + str2
console.log(str3);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");