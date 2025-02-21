 ///  function declaration//

 // normal function ko define se pahle call kr sakte hai 
 // 

 console.log(myFunction(7 , 98)); // hoisting 

function myFunction(a, b){
    // console.log("hii prince")
    // const add = a + b
    // console.log(add);
    // return add 
    // console.log(a + b)
    return a + b
    
    
}

// myFunction(5, 6)
// console.log(myFunction(7 , 98));


////  Arrow function ////

//hoisting nhi hota hai
// short me likhne ke liye use hota hai aur code clearity
// this binding appna nhi rahta hai and ise bhi bina nam ka function bhi hota hai aur nam bhi ise bhi anynoumous kahte hai
const toFunction = (a , b)=>{
    // console.log("hi prince");
    
    // const multiple = a * b
    // console.log(multiple);
    // console.log(a * b);
    // return  multiple
    return a * b
    

    
}
    console.log(toFunction(3 , 6));
    
//    console.log(toFunction(7,8));
    // toFunction(6 , 7);
    // console.log(toFunction(7 , 8));



    ///  function expression // (anynomous function)

    // bina nam ka ya nam ka ho sakta or ise variable me assign krte hai 
    //hoisted ni hota hai yani define krne ke badd hi call kr sakte hai

    const yourFunction =  function(a , b){
        console.log("hii prince");
        // const devide = a / b
        // return devide
        // console.log(devide);
        return a / b
        
        
    };
    // yourFunction(10 , 2);
    console.log(yourFunction(12 , 4));
    

    
