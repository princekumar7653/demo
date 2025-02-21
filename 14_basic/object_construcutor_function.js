
/// object constructor function 

function Student(first,last,age,cls){
    this.firstname = first
    this.lastname = last
    this.age = age
    this.class = cls

}

const student1 = new Student("prince","kumar",25,4);
const student2 = new Student("ritesh","kumar",55,4);
const student3 = new Student("sonu","kumar",25,4);

student1.city = "patna"
student1.name = function(){
    return this.firstname + " " + this.lastname
}
console.log(student1.name());
console.log(student2);
console.log(student3);