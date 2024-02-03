function name() {
    console.log("p");
    console.log("r");
    console.log("i");
    console.log("n");
    console.log("c");
    console.log("e");
}

//name() 


// function addTwoNumbers(number1, number2){ // (parameter)
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){ // (parameter)
    // let result = number1 + number2
    // return result
    return number1+number2
}

const result = addTwoNumbers(5, "43") //(argument)

// console.log("result", result);


function loginUserMassage(username = "sonu"){
    if(!username){
        console.log("please enter a username");
        return

    }
    return `${username} just logged in`
}

//console.log(loginUserMassage("prince"));

//console.log(loginUserMassage("prince"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500));


const user = {
    username: "prince",
    price: 500
}

function handleObject(anyObject){
    console.log(`usernmae is ${anyObject.username} and price ${anyObject.price}`);
}

//handleObject(user)
handleObject({
    username: "nitish",
    price: 200
})


const newArray = [234, 543, 765, 659]

function returnThirdValue(getArray){
    return getArray[2]
}

//console.log(returnThirdValue(newArray));
console.log(returnThirdValue([200, 400, 600, 700]));