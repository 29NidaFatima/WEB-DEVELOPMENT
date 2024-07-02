// ------Practice Question of loops and functions------
//  Q1
// let marks = {
//     harry: 98,
//     rohan: 70,
//     aakash: 7
// }

// for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log("Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
// }

// Q2
// let marks = {
//     harry: "98",
//     rohan: "70",
//     aakash: "7"
// }
// for (const key in marks) {

//     console.log("Marks of " + key + " are " + marks[key])

// }
// Q4
// function mean(p, q, r, s) {
//     return (p + q + r + s) / 5
// }
// result = mean(2, 4, 6, 8);
// console.log("Mean is:" + result)
// --------------USING ARROW FN---------
const mean=(a,b,c,d,e)=>{
    return a+b+c+d+e/5;
}
 const cal=mean(2,3,4,5,6);
 console.log(cal);
// Q3
// let cn=4;
// let i;
// while(i!=cn){
//    console.log("Try Again")
//    i=prompt("Enter a number")
// }
// console.log("completed")

