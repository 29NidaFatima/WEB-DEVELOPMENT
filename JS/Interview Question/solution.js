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
// function mirrorImage(str) {
//     let str1= str.split('').reverse().join('');
//     let str2= str+ str1;
//     return str2;
// }
//  let output=mirrorImage("hello");
//  console.log(output);

//  4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
// function isValidPassword(password) {
//     // Check the length of the password
//     if (password.length < 8) {
//         return "Password is invalid: must be at least 8 characters long.";
//     }
    
//     // Check for both uppercase and lowercase letters
//     let hasUpper = false;
//     let hasLower = false;
//     for (let char of password) {
//         if (char >= 'A' && char <= 'Z') {
//             hasUpper = true;
//         }
//         if (char >= 'a' && char <= 'z') {
//             hasLower = true;
//         }
//     }
    
//     if (!hasUpper || !hasLower) {
//         return "Password is invalid: must contain both uppercase and lowercase letters.";
//     }
    
//     // Check for at least one digit
//     let hasDigit = false;
//     for (let char of password) {
//         if (char >= '0' && char <= '9') {
//             hasDigit = true;
//             break;
//         }
//     }
    
//     if (!hasDigit) {
//         return "Password is invalid: must contain at least one digit.";
//     }
    
// 5. The Sum Selector:
// You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
// function sumUntilNegative(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];

//         if (element < 0) {
//             break; // Stop summing when a negative number is encountered
//         } else {
//             sum += element; // Add the current element to the sum
//         }
//     }
//     return sum;
// }

// let output = sumUntilNegative([1, 2, 3, 4, -3, 4, -5, -6, 7, 8]);
// console.log(output); // Should return 10 (1 + 2 + 3 + 4)
// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
//  function vowelCounter(str) {
//      let regexVowels=/[aeiou]/gi;
//     console.log(`Total vowels in the string is: ${str.match(regexVowels)}`);
//     console.log(`Length of string is: ${str.match(regexVowels).length}`);
//  }
 
// vowelCounter("NidaA Fatima");
// 8. Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
// let asyncArrayMapping = async function(array) {
//     return array.map(num => {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve(num * 2);
//         }, 500);
//       });
//     });
//   }
  
//   async function main() {
//     let b = await asyncArrayMapping([2, 3, 4, 5, 6]);
//     const results = await Promise.all(b);
//     console.log(results); 
//   }
  
//   main();
// 9. The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.
// function getRandomDelay(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// async function placeOrder() {
//     return new Promise((resolve) => {
//     let delay= getRandomDelay(1000,5000)
//       setTimeout(() => {
//         resolve("Order confirmed");
//       }, delay); 
//     });
//   }
  
//   async function main() {
//     let b = await placeOrder();
//     console.log(b);
//   }
  
//   main();
  
// 10. The Coffee Machine:
// In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.
// function getRandomDelay(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// async function brewCoffeer(coffeetype) {
//     return new Promise((resolve) => {
//     let delay= getRandomDelay(1000,5000)
//       setTimeout(() => {
//         resolve("coffee is ready");
//       }, delay); 
//     });
//   }
  
//   async function main() {
//     let b = await brewCoffeer("cappuccino");
//     console.log(b);
//   }
  
//   main();
// 11. The Array Filterer:
//     You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.
// function filterProducts(products, criterion) {
//   return products.filter(product => {
//       for (let key in criterion) {
//           if (product[key] !== criterion[key]) {
//               return false;
//           }
//       }
//       return true;
//   });
// }


// const products = [
//   { id: 1, name: 'Laptop', category: 'electronics', price: 999 },
//   { id: 2, name: 'Shirt', category: 'clothing', price: 29 },
//   { id: 3, name: 'Coffee Maker', category: 'kitchen', price: 49 },
//   { id: 4, name: 'Smartphone', category: 'electronics', price: 699 },
//   { id: 5, name: 'Blender', category: 'kitchen', price: 99 }
// ];

// const criterion = { category: 'electronics' };
// const filteredProducts = filterProducts(products, criterion);
// console.log(filteredProducts);
// 13. The Shopping Cart Totalizer:
    // You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.
    function calculateTotal(cart) {
      return cart.reduce((total, product) => {
          return total + (product.price * product.quantity);
      }, 0);
  }
  
 
  const cart = [
      { id: 1, name: 'Laptop', price: 999, quantity: 1 },
      { id: 2, name: 'Shirt', price: 29, quantity: 3 },
      { id: 3, name: 'Coffee Maker', price: 49, quantity: 2 }
  ];
  
  const totalCost = calculateTotal(cart);
  console.log(totalCost); // Output: 1154
  