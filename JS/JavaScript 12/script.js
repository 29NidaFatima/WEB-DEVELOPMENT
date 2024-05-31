// console.log("Nida is Hacker");
// console.log("Nida is Hecker");
//----------------Asynchronous action------------
// setInterval(() => {
//     console.log("I am inside settimeout");
// }, 0);
// setInterval(() => {
//     console.log("I am inside settimeout 1");
// }, 0);
// console.log("The End");

//--------------callback---------------------
// const callback = (arg) => {
//     console.log(arg)
// }
// const loadScript = (src, callback) => {
//     let sc = document.createElement("script")
//     sc.src = src;
//     sc.onload = callback("Nida")
//     document.head.append(sc)
// }
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
// function sum(a,b) {
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback) {
//     sumCallback(a,b);
// }
// calculator(2,3,sum)

// const hello=()=>{
//     console.log("helooo");
// }
// setTimeout(hello,3000)
// -----------------------callback Hell-->Nesting---------------
// function getData(dataid,getNextData) {
//    setTimeout(()=>{
//      console.log("data",dataid);
//      if (getNextData) {
//       getNextData();
//      }
    

//    },2000)
// }
// getData(1,()=>{
//   getData(2,()=>{
//     getData(3,()=>{
//       getData(4);
//     })
//   })
// })
//---------Promise-----------
// let promise=new Promise((resolve,reject)=>{
//   //pending state
//   console.log("I am a promise");
//   // resolved state
//   // resolve("Sucess");
// //rejected state
// reject("Some error occured")
// })
// Example
// function getData(dataid,getNextData){
// return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//          console.log("data",dataid);
//          resolve("sucess");
//         // reject("error")
//          if (getNextData) {
//           getNextData();
//          }
        
    
//        },5000)
// })
// }
//------- .then()-------
// const getPromise=()=>{
//    return new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     resolve("sucess")
//   })
  
// }
// let promise =getPromise();
// promise.then((res) => {
//   console.log("Promise Fulfilled",res);
// })


//-------.catch()----------
// const getPromise=(err)=>{
//   return new Promise((resolve,reject)=>{
//    console.log("I am a promise",err);
//    reject("error")
//  })
 
// }
// let promise=getPromise();
// promise.catch(() => {
//  console.log("Promise rejected");
// })
//-----promise chaining Example----

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("sucess")
    }, 3000);
  })
}
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("sucess")
    }, 4000);
  })
}
console.log("fetching data1");
 let p1 = asyncFunc1();
 p1.then((result) => {
  console.log(result);
  console.log("fetching data2");
  let p2 = asyncFunc2();
  p1.then((result) => {
   console.log(result);
  })
 })
 