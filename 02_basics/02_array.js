const marvel_heroes = ["ironman", "spiderman", "batman"]
const dc_heroes = ["superman", "flash", "batman"]

const newArr = marvel_heroes.concat(dc_heroes);
console.log(newArr); // Combines two or more arrays. This method returns a new array without modifying any existing arrays.

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes); // [ 'ironman', 'spiderman', 'batman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5], [6, 7, [8, 9]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(Array.isArray("kunal")); //false
console.log(Array.from("kunal")); // [ 'k', 'u', 'n', 'a', 'l' ]
console.log(Array.from({name: "kunal"})); // []

let num1 = 10
let num2 = 20
let num3 = 30
console.log(Array.of(num1, num2, num3)); // [ 10, 20, 30 ]
