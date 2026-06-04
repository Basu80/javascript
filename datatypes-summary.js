// Primitive datatypes
// call by value
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// JavaScript is a dynamically typed language.
// In JavaScript, variables do not have fixed types; the JavaScript engine determines the type of a variable at runtime based on the value assigned to it.  This means a single variable can hold different types of data at different times (e.g.,
 //  a number one moment and a string the next) without requiring explicit typedeclarations
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail //undefined
const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id === anotherId)

const bigNumber = 3434356776878967666767657576n
// Reference types(Non Primitive)
//Arrrays, Objects, Functions
const names = ["Chessman","Bibisha","Andrew"]
let myObj = {
    name: "Kshitiz",
    age: 19,
}
//treating function as variable
const myFunction = function(){
    console.log("hello beautiful people")
}
console.log(typeof bigNumber)
console.log(typeof myFunction);

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object*/
       