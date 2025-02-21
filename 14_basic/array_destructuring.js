
const myarray = ["red","green","blue","brown","yellow"];

// const   [first, , third] = myarray

// console.log(`this is ${first} color this is ${third} color`);

// const [a,b,c,d,e,f = "purple"] = myarray

// console.log(a,b,c,d,e,f);

// (iii) Swap करना (बिना extra variable के)

let q = 6, p = 8;
[q , p]  = [p , q];

console.log(q);
console.log(p);


// (iv) Function से Multiple Values Extract करना

function car(){
    return ["enova","nano"]
}

const [a,b] = car()
console.log(a,b);

