//Mine Solution
// let boxes= document.body.getElementsByClassName("box");
// console.log(boxes)

// boxes[0].style.color="pink"
// boxes[1].style.color="yellow"
// boxes[2].style.color="green"
// boxes[3].style.color="blue"
// boxes[4].style.color="red"
// boxes[0].style.backgroundColor="yellow"
// boxes[1].style.backgroundColor="blue"
// boxes[2].style.backgroundColor="red"
// boxes[3].style.backgroundColor="pink"
// boxes[4].style.backgroundColor="black"
// -----------video solution-----------
console.log("script is initializing");

 let a = console.dir("Nida")
 console.log(typeof a);

let boxes = document.querySelector(".container").children;
console.log(boxes);

function getRandomColor() {
    let val1 = Math.ceil(Math.random() * 255);
    let val2 = Math.ceil(Math.random() * 255);
    let val3 = Math.ceil(Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxes).forEach(element => {
    element.style.backgroundColor = getRandomColor();
    element.style.color = getRandomColor();
});
