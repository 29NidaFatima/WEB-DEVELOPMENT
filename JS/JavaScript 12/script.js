// console.log("Nida is Hacker");
// console.log("Nida is Hecker");
//Asynchronous action
// setInterval(() => {
//     console.log("I am inside settimeout");
// }, 0);
// setInterval(() => {
//     console.log("I am inside settimeout 1");
// }, 0);
// console.log("The End");
const callback = (arg) => {
    console.log(arg)
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Nida")
    document.head.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)