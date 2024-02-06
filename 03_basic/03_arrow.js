const user = {
    username: "prince",
    price: 999,

    welcomeMassage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

//user.welcomeMassage()
//user.username = "gopal"
//user.welcomeMassage()

console.log(this);

const chai = () => {
    let usernmae= "prince"
    console.log(this);
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "prince"})


console.log(addTwo(6, 7));
