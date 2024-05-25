// Q1
// let num=[1,2,3,4,5,6,7,89,90]
// let num1=prompt("Enter a number")
// a=Number.parseInt(num1);
// num.push(num1)
// console.log(num)
// Q2
// let num=[1,2,3,4,5,6,7,89,90]
// let num1;
// do {
//     num1=prompt("Enter a number")
// a=Number.parseInt(num1);
// num.push(num1)
// console.log(num)
// } while (num1!=0);
// Q3
// const array=[10,5,20,30,7,9];
// const divisbleByTen=(e)=>{
//     if(e%10==0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(array.filter(divisbleByTen))
// Q4
// const array=[10,5,20,30,7,9];
// const newArr=(e)=>{
//     return e**2
// }
// console.log(array.map(newArr))
// Q5
 const numbers=[1,2,3,4,5];
let n=numbers.reduce((x1,x2)=>{
return x1*x2;
})
console.log(n)