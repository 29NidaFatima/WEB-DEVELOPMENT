// -----------synchronous action(line of code executed in sequence wise)------------
// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");
// ----------------------------------------
//  function hello(params) {
//     console.log("hello");
//  }
//  setTimeout(hello,2000);
//  -----Another way to define function-------- 
// setTimeout(()=>{
//     console.log("hello");
// },2000)
//----------------Asynchronous action------------
// console.log("Nida is Hacker");
// console.log("Nida is Hecker");
// setInterval(() => {
//     console.log("I am inside settimeout");
// }, 2000);
// setInterval(() => {
//     console.log("I am inside settimeout 1");
// }, 4000);
// console.log("The End");
//--------------callback---------------------
// function sum(a,b) {
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback) {
//     sumCallback(a,b);
// }
// calculator(2,3,sum)
// -----Another Method-----
// function calculator(a,b,sumCallback) {
//   sumCallback(a,b);
// }
// calculator(2,3,(a,b)=>{
//   console.log(a+b);
// })

// const hello=()=>{
//     console.log("helooo");
// }
// setTimeout(hello,3000)
// -----------------------callback Hell-->Nesting---------------
// function getData(dataid,getNextData) {
//    setTimeout(()=>{
//      console.log("data",dataid);
//      if (getNextData) {
//       getNextData() ;
//      }
//    },2000)
// }
// getData(1,()=>{
// console.log("getting data2...");
//   getData(2,()=>{
// console.log("getting data3...");
//     getData(3,()=>{
// console.log("getting data4...");
//       getData(4);
//     })
//   })
// })
//---------Promises-----------
// let promise=new Promise((resolve,reject)=>{
// //   //pending state
//   console.log("I am a promise");
//   // resolved state
//   resolve("success");
// //rejected state
// reject("Some error occured")
// })
// Example
// function getData(dataid){
// return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//          console.log("data",dataid);
//          resolve("success");
//         // reject("error")         
//        },5000)
// })
// }
//------- .then()-------
// const getPromise=()=>{
//    return new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     resolve("success")
//   })

// }
// let promise =getPromise();
// promise.then((res) => {
//   console.log("Promise Fulfilled",res);
// })


//-------.catch()----------
// const getPromise=(err)=>{
//   return new Promise((resolve,reject)=>{
//    console.log("I am a promise");
//    reject("error")
//  })

// }
// let promise=getPromise();
// promise.catch((err) => {
//  console.log("Promise rejected",err);
// })
//-----promise chaining Example:1----

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success")
//     }, 3000);
//   })
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success")
//     }, 4000);
//   })
// }
// function asyncFunc3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data3");
//       resolve("success")
//     }, 5000);
//   })
// }
// console.log("fetching data1");
// let p1 = asyncFunc1();
// p1.then((result) => {
//   console.log(result);
//   console.log("fetching data2");
//   let p2 = asyncFunc2();
//   p2.then((result) => {
//     console.log(result);
// console.log("fetching data3");
// let p3=asyncFunc3()
// p3.then((result) => {
//     console.log(result);  
// })
//   })
// })
//-----promise chaining Example:2----
// function getData(dataid){
// return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//          console.log("data",dataid);
//          resolve("success");
//         // reject("error")         
//        },5000)
// })
// }
// getData(1).then((result) => {
//   console.log(result);
//   getData(2).then((result) => {
//     console.log(result);
//   })
// })

// ---------------Another way---------
// function getData(dataid){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//            console.log("data",dataid);
//            resolve("success");
//           // reject("error")         
//          },5000)
//   })
//   }
//   console.log("getting data1.....");
//   getData(1)
//   .then((result) => {
//     console.log("getting data2.....");
//    return getData(2);
//   })
//   .then((result) => {
//     console.log("getting data3.....");
//     return getData(3);
//    })
//    .then((result) => {
//     console.log(result);
//    })
//-----promise chaining Example:3----
// Example function that returns a promise
// function asyncOperation1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Operation 1 completed");
//             resolve("Result from operation 1");
//         }, 1000);
//     });
// }

// function asyncOperation2(resultFromOp1) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Operation 2 completed with", resultFromOp1);
//             resolve("Result from operation 2");
//         }, 1000);
//     });
// }

// function asyncOperation3(resultFromOp2) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Operation 3 completed with", resultFromOp2);
//             resolve("Result from operation 3");
//         }, 1000);
//     });
// }

// Chaining promises
// asyncOperation1()
//     .then(resultFromOp1 => {
//         return asyncOperation2(resultFromOp1);
//     })
//     .then(resultFromOp2 => {
//         return asyncOperation3(resultFromOp2);
//     })
//     .then(resultFromOp3 => {
//         console.log("All operations completed with", resultFromOp3);
//     })
//     .catch(error => {
//         console.error("An error occurred:", error);
//     });

    // ------async----------
    //  async function hello() {
    //   console.log("hellooooo");
    // }
    //-------await------
//     function api() {  
//       return new Promise((resolve,reject)=>{
//      setTimeout(() => {
//       console.log("Weather data");
//       resolve(200)
//      }, 2000);
//       })
//     }

//    async function getWeatherData() {
//      await api();
//    }
  //  -----------------async-await--------------------------
//   function getData(dataid){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//            console.log("data",dataid);
//            resolve("success");
//           // reject("error")         
//          },2000)
//   })
//   }
//   async function getAllData(){
//     console.log("getting Data1...");
// await getData(1);
// console.log("getting Data2...");
// await getData(2);
// console.log("getting Data3...");
// await getData(3);
// console.log("getting Data4..");
// await getData(4);
//   }
//   // USING IIFE
  function getData(dataid){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
             console.log("data",dataid);
             resolve("success");
            // reject("error")         
           },2000)
    })
    }
  (async function (){
    console.log("getting Data1...");
await getData(1);
console.log("getting Data2...");
await getData(2);
console.log("getting Data3...");
await getData(3);
console.log("getting Data4..");
await getData(4);
  })();
  