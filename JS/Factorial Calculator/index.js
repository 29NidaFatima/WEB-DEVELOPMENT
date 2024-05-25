//USing Reduce Method
// let a1=[1,2,3,4,5,6]
// let product=((a,b)=>{
// return a*b;
// })
// console.log(a1.reduce(product))

//using for loop
let a=6;
function factorial(number) {
    let fac=1;
    for (let i = 1; i<=number; i++) {
      fac=fac*i
        
    }
    console.log(fac)
}

factorial(a)
