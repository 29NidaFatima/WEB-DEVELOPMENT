
// ----------PROTOTYPE-------------
// const student={
//     fullName:"Nida Fatima",
//     marks:94.4,
//     printMarks:function(){
//         console.log("marks=",this.marks);
//     }
   
// } 
// const employee={
//     calTax(){
//         console.log("tax rate is 10%");
//     }
// }
// const nidaFatima={
//     salary:5000,
//     calTax(){
//         console.log("tax rate is 20%");
//     }
// }
// const nidaFatima1={
//     salary:5000,
// }
// const nidaFatima2={
//     salary:5000,
// }
// const nidaFatima3={
//     salary:5000,
// }
// nidaFatima.__proto__=employee;
// nidaFatima1.__proto__=employee;
// nidaFatima2.__proto__=employee;
// nidaFatima3.__proto__=employee;
// --------------CLASSES----------------
// class Toyotacar{
//     constructor(brand,mileage){
//         console.log("creating new object");
//         this.brand=brand;
//         this.mileage=mileage;
//     }
// start(){
//     console.log("START");
// }
// stop(){
//     console.log("STOP");
// }

// }
// let fortuner= new Toyotacar("fortuner",10);

// let lexus= new Toyotacar("lexus",12);
// ---------INHERITANCE--------------
// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }
// class Child extends Parent{

// }
// let obj= new  Child();
// console.log(obj);
// --Example--
// class Person{
//    constructor(){
//     this.species="homo sapiens"
//    }
//     eat(){
//         console.log("Eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("Do nothing");
//     }
// }
// class Engineer extends Person{
//     work(){
//         console.log("Solve Problems,build something");
//     }
// }
// class Doctor extends Person{
//     work(){
//         console.log("Treat Patient");
//     }
// }
// let nidaobj= new Engineer();
//-----------SUPER KEYWORD------
// class Person{
//    constructor(name){
//     console.log("Enter Parent Constructor");
//     this.species="homo sapiens";
//     this.name=name;
//    }
//     eat(){
//         console.log("Eat");
//     }
// }
// class Engineer extends Person{
//     constructor(name){
//         console.log("Enter Child Constructor");
//         super(name); // to invoke parent class constructor
//         // this.branch=branch;
//         console.log("Exit Child Constructor");
       
//     }
//     work(){
//         console.log("Solve Problems,build something");
//     }
// }
// let engObj= new Engineer("Nida");
// ----------------------PRACTICE QUESTION 1------------------------
// let data="secret information"
// class User{
//     constructor(name,email){
//         this.name= name;
//         this.email=email
//     }
//     viewData(){
//         console.log("Data=",data);
//     }
// }
// let student1=new User("Nida","abc@gmail.com");
// let student2=new User("Fatima","def@gmail.com");
// let teacher= new User("Dean","dean@college.com")
// ---QUESTION 2----
class User{
    constructor(name,email){
        this.name= name;
        this.email=email
    }
    viewData(){
        console.log("Data=",data);
    }
}
class Admin extends User{
constructor(name,email){
    super(name,email)
}
    editData(){
data="Some new data "
    }
}
let Admin1= new Admin("adiba","adiba@gmail.com")