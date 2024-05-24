let arr=[1,13,5,7,11];
// let newArr=[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

//Easy Method
let newArr=arr.map((e)=>{
    return e**2
})
console.log(newArr);