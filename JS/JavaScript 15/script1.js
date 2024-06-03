
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
class Toyotacar{
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
start(){
    console.log("START");
}
stop(){
    console.log("STOP");
}

}
let fortuner= new Toyotacar("fortuner",10);

let lexus= new Toyotacar("lexus",12);
