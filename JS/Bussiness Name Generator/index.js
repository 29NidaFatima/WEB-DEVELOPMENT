
// const adjectives = {
//     0: "Crazy",
//     1: "Amazing",
//     2: "fire"
// }
// let random1 = Math.floor(Math.random() * adjectives.length);

// const shopnames = {
//     0: "Engines",
//     1: "Foods",
//     2: "Garments"
// }
// let random2 = Math.floor(Math.random() * shopnames.length);

// const anotherwords = {
//     0: "Limited",
//     1: "bros",
//     2: "hub"
// }
// let random3 = Math.floor(Math.random() * anotherwords.length);
// console.log(`Bussiness name is ${adjectives[random1]} ${shopnames[random2]} ${anotherwords[random3]}`);
let random= Math.random();
console.log(random)
let first,second,third;
//Adjectives
if(random<0.33){
    first="Crazy"
}
else if(random<0.66 && random>=0.33){
    first="Amazing"
}
else{
    first="fire"
}
//ShopNames
if(random<0.33){
   second="Engines"
}
else if(random<0.66 && random>=0.33){
    second="Foods"
}
else {
    second="Garments"
}
//otherword
if(random<0.33){
   third="Limited"
 }
 else if(random<0.66 && random>=0.33){
    third="bros"
 }
 else {
    third="hub"
 }
 console.log(`Bussiness name is ${first} ${second} ${third}`)