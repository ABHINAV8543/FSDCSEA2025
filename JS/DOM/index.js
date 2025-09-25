console.log("hello World");
const div = document.getElementsByTagName("div");
// const element = document.createElement("p");
// element.innerText = hello my name is Abhinav;
// div.append(element);
// div[0].innerText = "hello World";
// div[0].style.color = "brown";
// div[0].style.backgroundColor = "white";

// const container = document.getElementsByClassName("container");
// console.log(container);
// container[0].innerHTML = "<h2 style=color:cyan>ABES Engineering College</h2>";
// console.log(container);
// const h1 = document.createElement("h1");
// h1.innerText = "Computer Science and Engineering";
// h1.style.color = "red";
// h1.style.border = "1px solid black";
// h1.style.borderRadius = "10px";
// container[0].append(h1);
// const img = document.createElement("img");
// console.log(img.getAttribute());

// const button = document.querySelector("#button");
// button.addEventListener("click", () => {
//     console.log("hello");
//     img.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCnjtYHR-JqDzR0UHJduZ_pHI9LveRmtYug&s";
//     img.setAttribute("height", "200px");
//     img.setAttribute("width", "200px");
//     img.setAttribute("style", "border-radius:10px");
//     console.log(img);
//     container[0].append(img);
// });

// const button2 = document.querySelector(".btn");
// function longData() {
//     console.log("Start");
//     for (let i = 0; i < 1000; i++) {
//         console.log(i);
//     }
//     console.log("end");
//}
//button2.addEventListener("click", longData);

// function msg(myMsg){
//     return "hello" + myMsg;
// }
// function msgHandler(args, clbk){
//     //console.log("Hello"+args);
//     const data = clbk(args);
//     console.log(data);
// }
// msgHandler("Abhinav", msg);

// const arr = ["amit", "rahu", "vansh"];
// arr.forEach((element) => {
//     msgHandler(element, msg); 
// })
// msgHandler("Abhinav", msg);

// setTimeout(() => {
//     console.log("First MSG");
//     setTimeout(() => {
//         console.log("Second MSG");
//         setTimeout(() => {
//         console.log("Third MSG");
//         setTimeout(() => {
//             console.log("Fourth MSG");
//         }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// const myPromise = new Promise((resolve, reject) => {
//     const password = "43fd2402";
//     if (password.length > 8) {
//         resolve("Password is accepted or valid");
//     } else {
//         reject("Password is rejected due to length");
//     }
// });
// console.log(myPromise);

// myPromise
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally((msg) => {
//         console.log("Finally resources closed");
//     });

// async function handler() {
//     try {
//         const response = await myPromise;
//         console.log(response);
//     } catch (err) {
//         console.log(err);
//     }
// }
// handler();

const printContainer = document.querySelector(".print-container");
const showData = document.querySelector(".show-data");
async function doubleHandler() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    console.log("first data", data[0]);
    const html = `
    <div style="display: flex; flex-direction: row; gap:10px;">
    <img src="${data[0].image}" style="height=100px; width:75px;">
    <p>Title: ${data[0].title} </p>
    <p>Id: ${data[0].id}</p>
    <p>Price:${data[0].price} </p>
    <p>Description: ${data[0].description}</p>
    </div>
    `;
    showData.addEventListener("click", () => {
      printContainer.innerHTML = html;
    });
  } catch (err) {
    console.log(err);
  }
}
doubleHandler();