console.log("FAULTY CALCULATOR");
let random = Math.random();
console.log(random);

let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}
if (random > 0.1) {
    console.log(`The Result is ${a} ${c} ${b}`);
    let result = eval(`${a} ${c} ${b}`);
   
    alert(`The Result is ${result}`);
} else {
    c = obj[c];
    let result = eval(`${a} ${c} ${b}`);
    console.log(`The Result is ${a} ${c} ${b}`);
    alert(`The Result is ${result}`);
}
