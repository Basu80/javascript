// Stack(Primitive) , Heap(Non-Primitive
let myName = "Chessman"

let anotherName ="Kshitiz"
anotherName = "Basu"

console.log(myName)
console.log(anotherName)

let userOne = {
    email : "abc@google.com",
    uId : "user1@uid.com"
}

let userTwo =userOne
userTwo.email = "xyz@google.com"
console.log(userOne.email)
console.log(userTwo.email);
