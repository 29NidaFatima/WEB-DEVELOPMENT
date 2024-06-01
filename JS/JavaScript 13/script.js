// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }
async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(x);
    console.log(data);

}
async function main() {
    console.log("loding modules");
    console.log("Do Something else");
    console.log("Load data");
    let data = await getData();
    console.log(data);
    console.log("Process data");
    console.log("task2");
}
main()
// data.then((result) => {
//     console.log(data);
//     console.log("Process data");
//     console.log("task2");  
// })
