// primitive detatypes

// 7 types: string, number, boolean, null, undefined, BigInt, symbol

const score = 100

const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null 
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

//const bigNumber = 5667727763555363888376n // bigInt

//console.log(bigNumber);




//reference (Non primitive)

// aaray, objects, functions

const heros = ["ajay", "vijay", "manoj"]

let myObj = {
    fullName: "prince singh",
    age: 22,
}

const myFunction = function(){
    console.log("prince singh");
}

console.log(typeof scoreValue);


 // ++++++++++++++++++++++++++++++++++++++++++++++++++ memroy ++++++++++++++++++++++++++++++++++++++++=


 // stack (primitive),  heap (non-primitive)


  let myYouTubeName = "princesinghdotcom"

  let anotherName = myYouTubeName 

  anotherName = "chaiaurcode" 

  console.log(myYouTubeName);
  console.log(anotherName);

  let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
  }

  let userTwo = userOne 

  userTwo.email = "prince@facebook.com"

console.log(userOne.email);
console.log(userTwo.email);