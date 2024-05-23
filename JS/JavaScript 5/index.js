console.log("Strings");
let a="Nida"
console.log(a);
//To print the any particular alphabet from the strings
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
let real_name="nida";
let friend="Zoya";
console.log("Her name is " + real_name +" and her friend name is "+ friend);
//---TEMPLATE LITERALS-->is made for developer life easy 
console.log(`Her name is ${real_name} and her friend name is ${friend}  `);
let b="Fatima";
console.log(b.toUpperCase()); //this function is used to convert the strings into uppercase
console.log(b.toLowerCase());//this function is used to convert the strings into lowercase if variable string is written in uppercase
console.log(b.length); //to find the lenghth if the string
console.log(b.slice(2,4)); //this function print all letters between index start with 2 and end with index 3 ,not included index 4
console.log(b.slice(1)); //this function print all letters from index 1 to  the end

console.log(b.replace("Fa","29")); //"fa" is replace by "29"
// If there is two occurence of the same letters ,replace only first occurence of the variable string
console.log(b.concat(a)) // This fn concatenate(add) the two strings
console.log(b.concat(a,"Adiba","Afsha")) //concatenate multiple strings which is given by user or could adds already defined variables
let c = "     Anamul Haque";
console.log(c)
//removing white space from c
let newName= c.trim();
console.log(newName);