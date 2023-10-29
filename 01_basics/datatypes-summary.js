// # Primitive

// 7 types of primitive : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3432435234524353463463434n



// # Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    myName: "vivek",
    age: 28,
    city: "pune",
}


const myFunction = function(){
        console.log("helo world");
}

console.log(typeof anotherId);