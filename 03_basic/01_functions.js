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

console.log(loginUserMassage("prince"));