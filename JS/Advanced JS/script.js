// -------IIFE------
// async function sleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(45)
//         }, 1000);
//     })
// }
// function sum(a,b,c) {
//     return a+b+c;
// }
// (async function main(){
//     let a= await sleep();
//     console.log(a);
// let b= await sleep();
// // console.log(b);
// ------ Array Destructuring------
// let [x,y]=[1,5];
// console.log(x,y);
// let [x,y,...rest]=[1,5,6,7,8,9];
// console.log(x,y,rest);
// ----- Object Destructuring--------
// let obj={
//     a:1,
//     b:2,
//     c:3,
//     d:4
// }
// let {b,d}=obj;
// console.log(b,d);
// let arr=[1,4,6];
// console.log(arr[0]+arr[1]+arr[2]);
// //another way
// console.log(sum(arr[0],arr[1],arr[2]));
// //another way
// console.log(sum(...arr));
// -----QUICK QUIZ------
// const a="the", b="no";
// const obj={a,b}
// console.log(obj);
// })()
// -------PRACTICE QUESTION-------
// Q1
// const a= async(text)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//          resolve(text)   
//         },2000);
//     })
// }
// (async()=>{
//  let word1= await a("Hello")
//  console.log(word1);

//  let word2= await a("World")
//  console.log(word2);
// }
// )();
// Q2
// function average(a,b,c,d,e) {
//     return (a+b+c+d+e)/5;
// }
// const arr=[1,2,3,4,5];
// console.log(average(...arr));
//Q3
// let a = async function(n=2) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(n);
//         }, 1000 * n);
//     });
// };

// (async () => {
//     let b = await a("nida"); // Call the function here
//     console.log(b); // This will print 2 after 2 seconds
// })();
function resolveAfterNSeconds(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resolved after ${n} seconds`);
        }, n * 1000);
    });
}

(async () => {
    console.log(await resolveAfterNSeconds(1)); // Resolves after 1 second
    console.log(await resolveAfterNSeconds(2)); // Resolves after 2 seconds
    console.log(await resolveAfterNSeconds(3)); // Resolves after 3 seconds
})();
// Q4
// function simpleInterest(p,r,t) {
//     return (p+r+t)/100;
// }
// let x=[1000,5,1];
// console.log(simpleInterest(...x));