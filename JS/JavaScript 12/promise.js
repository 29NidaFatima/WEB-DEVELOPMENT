console.log('This is Promises');

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
})
   
prom1.then((a)=>{
console.log();
})

 
