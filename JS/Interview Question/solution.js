// Q1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
// let students = [
//     "shubh", "anjali", "shivani", "shivangi", "anna", "annapurna", 
//     "shubham", "krishnanendu", "ravindranathan", "shivesh", "kaif"
// ];
// let houses = [];
// for (const student of students) {
//     if (student.length < 6) {
//         houses.push("Gryffindor");
//     }
//      else if(student.length<8) {
//         houses.push("Hufflepuff");
//     } 
//     else if (student.length < 12) {
//         houses.push("Ravenclaw");
//     }
//      else {
//         houses.push("Slytherin");
//     }
// }

// console.log(houses);
// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
// function doubleTrouble(arr) {
//     // Create a result array to store the doubled values
//     let result = [];
//     // Iterate over the input array
//     for (let i = 0; i < arr.length; i++) {
//         // Check if the current element is a consecutive duplicate of the previous one
//         if (i > 0 && arr[i] === arr[i - 1]) {
//             // If it is a duplicate, just push the current element without doubling
//             result.push(arr[i]);
//         } else {
//             // If it is not a duplicate, double the element and push it to the result array
//             result.push(arr[i] * 2);
//         }
//     }
//     return result;
// }

// // Example usage:
// const input = [1, 2, 2, 3, 3, 3, 4];
// const output = doubleTrouble(input);
// console.log(output); // Output: [2, 4, 2, 6, 3, 3, 8]
// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
function mirrorImage(str) {
    let str1= str.split('').reverse().join('');
    let str2= str+ str1;
    return str2;
}
 let output=mirrorImage("hello");
 console.log(output);