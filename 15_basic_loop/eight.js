//Calculate the factor of a number

let num = 15;
let num1 = 1;

while (num1 <= num) {
  if (num % num1 == 0) {
    console.log("factor:", num1);
  }
  num1++;
}
