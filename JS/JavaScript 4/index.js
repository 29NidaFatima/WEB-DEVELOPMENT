
// function nice(name){
//     console.log("Hey "  +name+  " you are nice!") 
//     console.log("Hey " +name+ " you are good") 
// }
// nice("Nida")
// nice("Fatima")
function sum(a,b,c=4){
    // console.log(a+b)
    console.log(a,b,c)
    return a+b+c
}
 result1=sum(2)
 result2=sum(2,8)
 result3=sum(12,14,1)
 console.log("The sum of these numbers is: ",result1)
 console.log("The sum of these numbers is: ",result2)
 console.log("The sum of these numbers is: ",result3)
//  -----Arrow function-----
 const func1= (x)=>{
    console.log("I am arrow function",x)
 }
 func1(34);
 func1(66);