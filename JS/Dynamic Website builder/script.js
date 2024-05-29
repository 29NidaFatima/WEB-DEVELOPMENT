
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div> 
</div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
//FunctionCall
createCard("Introduction to CSS | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 999, 8, "32:00", "imagee.webp")

createCard("Introduction to Express.JS | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", 17000000, 9, "32:00", "imagee.webp")

createCard("Introduction to REACT | Sigma Web Development Course - Tutorial #3", "CodeWithHarry", 180000, 10, "35:10", "imagee.webp")
