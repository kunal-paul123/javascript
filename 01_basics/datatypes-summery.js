// Primitive 

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

let id = Symbol('123')
let anotherId = Symbol('123')

// console.log(id == anotherId); //false

const bigNumber = 2135413554356436n


// Reference (non primitive)

// Array, Objects, Functions

let heroes = ["ironman", "avengers", "hulk"];

let myObj = {
    name: "Kunal",
    age: 21
} 

const myFunc = function() {
    // console.log("hello world");
}

// console.log(typeof anotherId);

// Stack(primitive), Heap(non-primitive)

let myYoutubename = "kunalpaul"
let anothername = myYoutubename
anothername = "kp123"

// console.log(myYoutubename);
// console.log(anothername);

let user1 = {
    email: "user1@google.com",
    upi: "user@sbi"
}

let user2 = user1

user2.email = "user2@google.com"

// console.log(user1);
// console.log(user2);