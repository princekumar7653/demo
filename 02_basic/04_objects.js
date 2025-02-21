// single tn

const finderUsr = new Object()

const finderUser = {}

finderUser.id = "234abc"
finderUser.name = "prince"
finderUser.isLoggedIn = false
console.log(finderUser.name);

const allUsers = {
    email: "prince123@gmail.com",
    fullName: {
        userfullname: {
            firstname: "prince",
            lastname: "singh"
        }

    }
}


console.log(allUsers.fullName.userfullname.firstname);
console.log(allUsers.email);



const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}
const obj4 = {7: "d", 8: "e", 9: "f"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1, ...obj2, ...obj4}



// console.log(obj3);


const users = [
    {
        id: 1,
        email: "prince@gmail.com"
    },
    {
        id: 1,
        email: "prince@gmail.com"
    },
    {
        id: 1,
        email: "prince@gmail.com"
    },
]

//users[1].email

// console.log(users[1].id)

// console.log(finderUser);

// console.log(Object.keys(finderUser));
// console.log(Object.values(finderUser));
// console.log(Object.entries(finderUser));

// console.log(finderUser.hasOwnProperty('isLogged'));

// destructure object

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "prince"

}



// course.courseInstructor

// const {courseInstructor: instructor} = course

//console.log(courseInstructor);

// console.log(instructor);

// json

// {
//     "name": "prince",
//     "coursename":, "js in hindi",
//     "price": "free"    
// }
 
// [
   // {},
   // {},
   // {}
// ]

// const key = "email"
const students = {
    Name:  "prince",
    Age: 22,
    rollNo:12

}
// students[key] = "princa@gmail.com"
students.gender = "male"

// console.log(students);
// console.log(students["Name"],["Age"]);
// console.log(students.gender);

for(let key in students){
    console.log(students[key]);
    
}

const key1 = "objkey1"
const key2 = "objkey2"

const value1 = "myval1"
const vlaue2 = "myval2"

const obj = {

}

obj[key1]= "hjk"
obj[key2]= "jjkm"
obj[value1] = "hero"
obj[vlaue2] = "zero"

console.log(obj);


console.log(obj[value1]);






