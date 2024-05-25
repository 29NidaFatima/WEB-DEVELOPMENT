// ------MAPPING(creating new array by performing some operation on old array value/elements)----
let arr=[1,13,5,7,11];
// let newArr=[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

//Easy Method
// let newArr=arr.map((e)=>{
//     return e**2
// })
// console.log(newArr);
// const a=[2,4,8];
// const newa1=a.map((value,index,a)=>{
//     return value*value;
// });
// console.log(newa1)
//--------FILTER--------
// const greaterThanSeven=(e)=>{
//     if(e>7){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(arr.filter(greaterThanSeven))
//--------------REDUCE--------------
const red =(a,b)=>{
    return a*b
} 
console.log(arr.reduce(red))            