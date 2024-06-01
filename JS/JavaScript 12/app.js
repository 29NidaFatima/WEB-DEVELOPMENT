let URl="https://cat-fact.herokuapp.com/facts";

// let promise = fetch(URl);
// console.log(promise);
 const getFacts= async()=>{
    console.log("getting data...");
    let response =  await fetch(URl);
console.log(response); // JSON format
let data = await response.json();
console.log(data);
 }