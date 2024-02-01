// single tn

//const finderUsr = new Object()

const finderUser = {}

finderUser.id = "234abc"
finderUser.name = "prince"
finderUser.isLoggedIn = false
//console.log(finderUser);

const allUsers = {
    email: "prince123@gmail.com",
    fullName: {
        userfullname: {
            firstname: "prince",
            lastname: "singh"
        }

    }
}


//console.log(allUsers.fullName.userfullname.firstname);


const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}
const obj4 = {7: "d", 8: "e", 9: "f"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1, ...obj2, ...obj4}



//console.log(obj3);


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

console.log(users[1].id)

// console.log(finderUser);

// console.log(Object.keys(finderUser));
// console.log(Object.values(finderUser));
// console.log(Object.entries(finderUser));

console.log(finderUser.hasOwnProperty('isLogged'));

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "prince"

}

// course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);

console.log(instructor);

// json

// {
//     "name": "prince",
//     "coursename":, "js in hindi",
//     "price": "free"    
// }

[
    {},
    {},
    {}
]






