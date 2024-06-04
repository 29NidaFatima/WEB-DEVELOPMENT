// ----------PROTOTYPE-------------
// let obj={
// a:1,
// b:"Nida"
// }

// console.log(obj);
// let animal={
//     eats:true
// }
// let rabbit={
//     jumps:true
// }
// rabbit._proto_=animal //set rabbit.[[Prototype]]=animal
// --------------CLASSES & Constructor----------------
// class Animal{

//     constructor(name){
//         this.name=name
//         console.log("object is created");
//     }
//     eats(){
//         console.log("Eating");
//     }
    // jumps(){
//         console.log("Jumping");
//     }
// }
// let a = new Animal("Bunny");
// console.log(a);
// class Lion extends Animal{
//     constructor(name){
//         super(name)
      
//         console.log("object is created and he is lion...");
//     }
// eats(){
//     super.eats()
//             console.log("Eating &roar");
//         }
// }
// let l =new Lion("Shera")
// console.log(l);
// -----------------practice set---------------
// Q1
// class Complexnumber{
// constructor(realpart, complexpart){
// this.realpart=realpart;
// this.complexpart=complexpart;
// }

// }
// let obj1= new Complexnumber(12,3);
// let obj2= new Complexnumber(1,4);

// // Q2
class Complexnumber{
    constructor(realpart, imaginarypart){
    this.realpart=realpart;
    this.complexpart=imaginarypart;
    }
    add(num){
let r= this.realpart+num.realpart;
let q=this.imaginarypart+num.imaginarypart
 return new Complexnumber(r,i)
    }
    }
    let obj1= new Complexnumber(12,3);
    let obj2= new Complexnumber(1,4);
    obj1.add(obj2)
    console.log(obj1.realpart,obj2.imaginarypart);
    // Q3
    class Human{
study(){
    console.log("learn all subject")
}

    }
    class Student extends Human{
study(){
    super().study
console.log("learn a particular subject");
}
    }
    let obj= new Student();
    // // Q4
    let check= Student instanceof Human;
    console.log(check);

