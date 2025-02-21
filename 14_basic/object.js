
let user = {
    name: "prince",
    age: 23,
    deg: "MCA",
    hob:{
        first: "playing cricket",
        sec: "watch playing cricket",
        third: {
            thirdchoice: "reading book",
            fourthchoice: "see the movie",
            fourth:{
                last: "like to  travel"
            }
        }
    }
}


/// first method //
//let {name:myname,age:myage,deg:mydeg,hob:myhobbie}= user //// aise bhi kr sakte hai 

/// second method ////

// let {name:myname,age:myage,deg:mydeg,hob:{first,sec,third,fourth,last}}= user ///// aise bhi kr sakte hai 

let {name:myname,age:myage,deg:mydeg,hob:{first,sec,third,thirdchoice,fourthchoice,fourth,last}}= user

// first execution ///

//console.log(`my name is ${myname} and i am ${myage} years old and my heighest qualification ${mydeg} and my hobbie ${myhobbie.first} and ${myhobbie.sec} and ${myhobbie.third.first} and ${myhobbie.third.sec} and ${myhobbie.third.fourth.last}`);

//// second execution ///

// console.log(`my name is ${myname} and i am ${myage} years old and my heighest qualification ${mydeg} and, my hobbie ${first} and, ${sec} and, ${third.first} and, ${third.sec} and, ${third.fourth.last}`);

console.log(`my name is ${myname} and i am ${myage} years old and my heighest qualification ${mydeg} and, my hobbie ${first} and, ${sec} and, ${firstch} and, ${third.sec} and, ${third.fourth.last}`);



