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
//---------Promises-----------

// console.log('This is Promises');

// let prom1 = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         console.log("Yes I am done");
//         resolve("Nida")
//     }, 3000);
// })
// prom1.then((result)=>{
//     console.log(result);
// })
//--------------------------------------------------------------------------------
let prom1 = new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No Random number was not supporting you")
    }
   else{
    setTimeout(() => {
        console.log("Yes I am done");
        resolve("Nida")
    }, 3000);
   }
})
   
   
prom1.then((a)=>{
console.log(a);
}).catch((err)=>{
    console.log(err);
})

 
