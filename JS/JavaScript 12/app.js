const URl="https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn =document.querySelector("#btn");


//  const getFacts= async()=>{
//     console.log("getting data...");
//     let response =  await fetch(URl);
// console.log(response); // JSON format
// // console.log(response.type); 
// // console.log(response.status) ; 
// let data = await response.json();
// console.log(data);
// console.log(data[2].text);
// factPara.innerText=data[2].text;
//  }

 function getFacts (response) {
    fetch(URL).then((response)=>{
return response.json();
    })
    .then((data)=>{
        console.log(data);
        factPara.innerText=data[2].text;
    })
 }
 btn.addEventListener("click",getFacts)