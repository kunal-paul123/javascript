//array

const num = [1, 2, 3, 4, 5]
const myHeroes = ["ironman", "spiderman", "superman"]

const myArr = new Array(1, 2, 3)
console.log(myHeroes[1]);

// array methods

num.push(6)
num.push(7)
num.pop(7)

// num.unshift(9)
// num.shift()

console.log(num.includes(9)); // flase
console.log(num.indexOf(2)); // 1
console.log(num.indexOf(15)); // -1

const newArr = num.join()
console.log(newArr); // 1,2,3,4,5,6
console.log(typeof newArr); // string

// slice, splice

const num1 = num.slice(1, 3);
console.log(num1); // [2, 3]
console.log(num); //[1, 2, 3, 4, 5]

const num2 = num.splice(1, 3);
console.log(num1); // [2, 3]
console.log(num); // [1, 5, 6]
