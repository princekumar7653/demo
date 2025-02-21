
let num1 = 1   
let num2 = 1
let nextnum
let count 
console.log(num1,num2);

count = 2

while(count < 50){
    nextnum = num1 + num2
    console.log(nextnum);

    num1 = num2
    num2 = nextnum

    count++
    
}
