let price = 5000;
let discount = 0;
let final_price;

if (price > 500) {
  discount = (price * 15) / 100;
}

final_price = price - discount;

console.log("total book price:", price);
console.log("total discount price 15%:", discount);
console.log("total book amount:", final_price);

let num = 7476479;

if (num % 2 == 0) {
  console.log("this is even number");
} else {
  console.log("this is odd number");
}

let num2 = 0;

if (num2 > 0) {
  console.log("positive number");
} else {
  console.log("nigative number");
}

let number1 = 23;
let number = 24;

let update = "";

if (update == "+") {
  number1 + number;
  console.log(update);
}

let mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("success");
    } else {
      reject("failed");
    }
  }, 2000);
});

mypromise
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });

  int x =7
  y = ++x  y = 8    x = 8
  z=--y    z = 7    y = 7
  p=++y    y = 8    p = 8
  q=x++    q = 8    x = 9
  r=z++    r = 7    z = 8

  x = 9, y = 8, Z = 8, P = 8, Q = 8, r = 7
  

  int x =7
  y = ++x   y = 8  x = 8
  z= ++y    z = 9  y = 9
  p=--z     p = 8  z = 8
  q=--y     q = 8  y = 8
  r=++x     r = 9  x = 9


    x = 9, y = 8, z = 8, p = 8, q = 8, r = 9

  int x =9
  y = x--
  z= y++
  p=++y
  q=++z
  r=p--

  int x =5
  y = --x
  z= y++
  p=++x
  q=--z
  r=z++

  

  x = 
  y =
  z=
  p=
  q=
  r=

