// Q1
// console.log("Hello  world")
let cont = document.body.firstElementChild
cont.children[0].style.color="red"


// Q3

document.body.firstElementChild.children[0].style.color="green"
document.body.firstElementChild.children[2].style.color="green"
// Q2
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background="cyan";
});