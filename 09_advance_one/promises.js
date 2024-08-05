const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve()
        console.log('async task is complete');
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve()
        console.log("async task 2")
    }, 1000);
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "prince", Email: "prince2323@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let Error = false
        if(!Error){
            resolve({username: "prince", password: "123566"})
        }else{
            reject('ERROR: something went wrong')
        }
        
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.password
}).then((password) => {
    console.log(password);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejected"))



const promisFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let Error = true
        if(!Error){
            resolve({username: "prince", gmail: "princesingh@gmail.com", password: 23456})
        }else{
           reject('ERROR: something went wrong')
        }
    }, 1000)
})

promisFive.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
})


const promiseSix = new Promise((resolve, reject) => {
    setTimeout(() => {
        let Error = false
        if(!Error){
            resolve({userId: "golugold", gmail: "ritesh23@gmail.com", password: 2345})
        }else{
            reject('ERROR: ye wrong code hai please check the code ')
        } 
    }, 2000)
})

promiseSix.then((user) => {
    console.log(user);
    return user.gmail
}).then((gmail) => {
    console.log(gmail);
}).catch((error) => {
    console.log(error);
})


const promiseSeven = new Promise((resolve, reject) => {
    setTimeout(() => {
        let Error = false
        if(!Error){
            resolve({userId: "golugold", gmail: "ritesh23@gmail.com", password: 2345})
        }else{
            reject('ERROR: ye wrong code hai please check the code ')
        } 
    }, 2000)
})

async function consumePromiseSeven(){
    const response = await promiseSeven
    console.log(response);
}

// async function consumePromiseSeven(){
//     try {
//         const response = await promiseSeven
//     console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseSeven()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    console.log("prince");
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((Error) => console.log(Error))

