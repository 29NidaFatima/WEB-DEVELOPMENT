let button =document.getElementById("btn")
//Lis of all mouse event--->https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
button.addEventListener("dblclick",()=>{
    // alert("I was clicked.yayyy!!")
    document.querySelector(".box").innerHTML="<b>Yayy you were clicked</b> Enjoy your click"
})
button.addEventListener("contextmenu",()=>{
    alert("Dont Hack us by Right Click Please")
})
document.addEventListener("keydown",(e)=>{
console.log(e.key);

})
