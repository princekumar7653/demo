// singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "prince",
    "fullName": "prince singh",
    [mySym]: "mykey1",
    age: 24,
    location: "noida",
    email: "gopal@google.com",
    isLoggedIn: false

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "gopal@chatgpt.com"
//Object.freeze(jsUser)

jsUser.email = "prince@microsoft.com"

//console.log(jsUser);

jsUser.greeting = function(){
    console.log(`hello js user, ${this.location}`);
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

