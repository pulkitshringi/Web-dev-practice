// function PersonMaker(name,age){
//     const person = {
//         name : name,
//         age : age,
//         talk : ()=>{
//             console.log(`your name is ${name}`);
//         }
//     };
//     return person;
// }
// let p1 = PersonMaker("Pooki",20);
// let p2 = PersonMaker("little",21);
// console.log(p1);
// console.log(p2);
// p1.talk();
// p2.talk();

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.greet=()=>{
//     console.log(`Welcome ${this.name} :)`);
// }
// let p1 = new Person("pooki",20);
// let p2 = new Person("little",21);
// console.log(p1);
// console.log(p2);

// class Person {
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         console.log(`hello ${this.name} ji`);
//     }
// }
// let p1=new Person("pooki",20);
// let p2= new Person("little",21);
// console.log(p1);
// console.log(p2);

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello Mr/Mrs ${this.name}`);
    }
}
class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
}
class Teacher extends Person{
    constructor(name,age,salary){
        super(name,age);
        this.salary=salary;
    }
    greet(){
        console.log("if a method with same name exists in child class, it will be used rather then the parent class.");
    }
}
let stu = new Student("pooki",20,100);
let teach = new Teacher("Godfrey",50,100000);
console.log(stu);
console.log(teach);
stu.greet();
teach.greet();