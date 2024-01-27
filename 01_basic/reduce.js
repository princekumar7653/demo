let arr = [10, 12, 14];

let sum = arr.reduce((res, curr) =>{
    return res+curr;
})

console.log(sum);




const factorial = arr.reduce((res, curr) =>{
    return res*curr;
});

console.log(factorial)


let brr = [1,2,3,4,5,6,7,8,];

let evenNumber = brr.filter((val)=>{
    return val % 2 === 0;
})

console.log(evenNumber);


let oddNumber = brr.filter((val)=>{
    return val % 2 !== 0;
})

console.log(oddNumber);
