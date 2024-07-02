console.log("JS-VARIABLES AND DATATYPES")
// let a=5;
// let b=6;
// console.log(a+b+8)
// let c="Nida";
//-----how to check the type of any variable
// console.log(typeof a,typeof b, typeof c)
//HOW TO DECLARE VARIABLE
// let _d="Adiba";   Valid
//var 55a="Rohan"    Invalid bcz its starts with number
//NOTE:var is global scope,Let and const are block scope
// { 
//     let b=66;
//     console.log(b)
// }
// console.log(b)


// const a1=29; // value cannot change if once assign in const
// a1 = a1 + 1;
//-----------------PRIMITIVE DATATYPE-------------------

let x = "Nida Fatima";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)
let obj = {
    "name": "Nida",
    "job role": 5600,
    "is_handsome": true
}
console.log(obj)
obj.salary = "100crores";
console.log(obj)
obj.salary = "500crores";
console.log(obj)
