
const students = {
    name: "prince",
    marks: 90,
    getDetail: function(){
        return (`${this.name} your scored ${this.marks}`);
    },

    age: 18,
    deg:{
        firstdeg: "10th",
        deg1:{
            secdeg: "12th",
            deg2:{
                third: "bsc",
                deg3:{
                    fourth: "ITI",
                    deg4:{
                        fifth: "MCA"
                    }
                }
            }
        }
    }
}

// let {name,marks,age,deg,deg1,deg2,deg3,deg4}= students

//let {name,marks,age,deg:{firstdeg,deg1,secdeg,deg2,third,deg3,fourth,deg4,fifth}}= students

let {name,marks,age,deg:{firstdeg,deg1,fifth,deg2,third,deg3,fourth,deg4,secdeg}}= students


// console.log(`my name is ${name} and my marks ${marks} and iam ${age} years old and my qualification ${deg.firstdeg} and second qualification ${deg.deg1.secdeg} and third qualification ${deg.deg1.deg2.third} and my fourth qualification ${deg.deg1.deg2.deg3.fourth} and my last qualification ${deg.deg1.deg2.deg3.deg4.fifth}`);

// console.log(students.getDetail());

console.log(`my name is ${name} and my marks ${marks} and iam ${age} years old and my qualification ${firstdeg} and second qualification ${secdeg} and third qualification ${third} and my fourth qualification ${fourth} and my last qualification ${fifth} ${students.getDetail()}`);



