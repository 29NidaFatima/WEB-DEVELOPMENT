// ----------PROTOTYPE-------------
// let obj={
// a:1,
// b:"Nida"
// }

// console.log(obj);
// let animal={
//     eats:true
// }
// let rabbit={
//     jumps:true
// }
// rabbit._proto_=animal //set rabbit.[[Prototype]]=animal
// --------------CLASSES & Constructor----------------
class Animal{

    constructor(name){
        this.name=name
        console.log("object is created");
    }
    eats(){
        console.log("Eating");
    }
    jumps(){
        console.log("Jumping");
    }
}
let a = new Animal("Bunny");
console.log(a);
class Lion extends Animal{
    constructor(name){
        super(name)
      
        console.log("object is created and he is lion...");
    }
eats(){
    super.eats()
            console.log("Eating &roar");
        }
}
let l =new Lion("Shera")
console.log(l);