function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;
    if(views<1000000){
        let viewStr=views/1000+"K"
    }
    else if(views>100000){
        let viewStr=views/1000000+"M"
    }
    else{
let viewStr=views/1000+"K";
    }
   
 let html=`<div class="card">
 <div class="image">
     <img src="${thumbnail}">
 </div>
 <div class="capsule"></div>
 <div class="text">
     <h1>${title}</h1>
     <p>${cName} . ${viewStr} views. ${monthsOld}months ago</p>
 </div>
</div>`

}
createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 1700000, "31:20", "imagee.webp")
