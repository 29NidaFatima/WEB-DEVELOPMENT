    // Q1
//     let a = document.getElementById("a1")
//     a.addEventListener("click", () => {
//         alert("Helloooo")
//     })
//     let b = document.getElementById("a2")
//     b.addEventListener("click", () => {
//         alert("Hiiiii")
//     })
//     let c = document.getElementById("a3")
//     c.addEventListener("click", () => {
//         alert("HEY")
//     })
// document.querySelector(".content")
// setInterval(() => {
//     document.querySelector(".content").innerHTML="Lorem ipsum dolor sit amet consectetur a"
// }, 5000);
// Q3
// let b1 = document.getElementById("google");
// b1.addEventListener("click", function() {
//   window.location = "https://www.google.com";
// });
// let b2 = document.getElementById("CHATGpt");
// b2.addEventListener("click", function() {
//   window.location = "https://www.google.com";
// });
// let b3 = document.getElementById("instagram");
// b3.addEventListener("click", function() {
//   window.location = "https://www.google.com";
// });
// Q4
// const fetchContent=async(url)=>{
//   con= await fetch(url);
//   let a=await con.json()
//   return a;
// }
// setInterval( async function() {
//   let url="https://jsonplaceholder.typicode.com/todos/1"
//   console.log(await fetchContent(url));
// }, 3000);
// Q5
// setInterval(async function(){
//   document.querySelector("#bulb").classList.toggle("bulb")
// }, 3000)