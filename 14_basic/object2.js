
// Object.freeze() - Object को Lock करना (Modify नहीं होगा) ///////

// const user = {name: "gopal", password: 12345674, age: 23};
// Object.freeze(user)
// user.age = 25
// console.log(user.age);



let user = {
    name: "prince",
    age: 23,
    deg: "MCA",
    hob:{
        first: "playing cricket",
        sec: "watch playing cricket",
        third: {
            thirdchoice: "reading book",
            fourthchoice: "see the movie",
            fourth:{
                last: "like to  travel"
            }
        }
    }
}
    // object destructuring
let {name,age,deg,hob:{first,sec,third,thirdchoice,fourthchoice,fourth,last}}= user

console.log(third.thirdchoice);

// Object.keys() - सभी keys निकालना
// console.log(Object.keys(user.hob));


// Object.values() - सभी values निकालना
// console.log(Object.values(user.hob.third));
// console.log(Object.values(user));


//bject.entries() - Key-Value pairs को Array में बदलना

// console.log(Object.entries(user));


// Object.assign() - दो Objects को जोड़ना

const user1 = {a: "prince", b: "hello",c: 24}
const user2 = {c: "Gopal", d: "hii"}
// const merge = Object.assign({},user1,user2)

// console.log(merge);


//Object.seal() - Existing properties update हो सकती हैं, लेकिन नई properties add नहीं हो सकतीं

Object.seal(user1)
user1.c=23
user1.d = "patna"

// console.log(user1);


//   hasOwnProperty() - Check करना कि Object में कोई Property है या नहीं

// console.log(user1.hasOwnProperty("b")); // output true
// console.log(user1.hasOwnProperty("e")); // output false

delete user.age;

// console.log(user);



//////////////////////   Object को Loop में Iterate करना
//////////////////////  1. for...in loop से Object iterate करना

// for (key in user){
//     console.log(`${key} = ${user[key]} `);
    
// }


//*******************************  Objects को JSON में बदलना और वापस लाना
//1. Object को JSON में बदलना (JSON.stringify())


const stringIn = JSON.stringify(user);

// console.log(stringIn);


//JSON को Object में बदलना (JSON.parse())

const userObject = JSON.parse(stringIn)
console.log(userObject);




