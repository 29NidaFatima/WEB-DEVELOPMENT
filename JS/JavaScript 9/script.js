// console.log("Nida")
// let boxes= document.getElementsByClassName("box");
// console.log(boxes)
// boxes[2].style.backgroundColor="blue"
// document.getElementById("redbox").style.backgroundColor="pink"
// document.querySelector(".box").style.backgroundColor="yellow" //For a Particular starting single box whose  class name matches
console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor="green"
});