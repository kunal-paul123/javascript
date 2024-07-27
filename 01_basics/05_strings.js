const name = "kunalpaul"
const age = 21

// console.log(`my name is ${name} and my age is ${age}.`);

const myName = new String("kunal")
// console.log(myName.__proto__);

// console.log(myName.toUpperCase());
console.log(myName.charAt(2)); // n
console.log(myName.indexOf("a")); // 3

const newName = name.substring(0, 4)
console.log(newName); // kunal

const anotherName = name.slice(0, 4)
console.log(anotherName); // kuna

const newString = "   kunal   "
const newstringOne = newString.trim()
console.log(newString); // '   kunal   '
console.log(newstringOne); // 'kunal'

const url = "https://kunal.com/kunal%20paul"

console.log(url.replace("%20", "-")); //output-> '"https://kunal.com/kunal-paul"'
console.log(url.includes("kunal")); // true
console.log(url.includes("kp")); //false

const gameName = "kunal paul"

console.log(gameName.split(" ")); // output-> ['kunal', 'paul']

const str1 = "kunal"
const str2 = "paul"

console.log(str1.concat(" ", str2)); // kunal paul