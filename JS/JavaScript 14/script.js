let a= prompt("Enter a number")
let b= prompt("Enter a second number")
if (isNaN(a)|| isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum=parseInt(a)+parseInt(b);
try {
    
console.log("The Sum is", sum*x); 
} catch (error) {
    console.log("error aa gya ");
}
finally{
    console.log("files are being closes");
}