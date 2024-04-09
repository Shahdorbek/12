// let boxs =document.getElementById("box");
// console.log(boxs);

// let wrapper =document.getElementsByClassName("wrapper");
// console.log(wrapper);

// let btn =document.getElementsByTagName("button");
// console.log(btn);

// const hearts =document.querySelectorAll(".heart");
// console.log(hearts);

// const salom = document.querySelector(".box");
// console.log(salom);
// salom.style.color='red';
// salom.style.backgroundColor="gold";
// salom.style.fontSize="30px";

// const circleWrapper= document.querySelector(".circle__wrapper")
// const divs =document.createElement("div");
// divs.classList.add("circle");
// circleWrapper.append(divs);
// divs.innerHTML= 'F'

// const btn = document.querySelectorAll("button");

// for(let i=0; i<btn.length; i++ ){
//     btn[i].style.backgroundColor="gold";
// }

// Blok1

const blok1 = document.querySelector(".blok1");
blok1.style.backgroundColor = "gold";
blok1.style.color = "white";
blok1.style.fontSize = "30px";
blok1.style.borderRadius = "10px";
blok1.style.borderRadius = "100%";
// Blok2
const btn2 = document.querySelectorAll("button");
for (let i = 0; i < btn2.length; i++) {
  if (i % 2 == 0) {
    btn2[i].style.backgroundColor = "red";
    btn2[i].style.color = "white";
  } else {
    btn2[i].style.backgroundColor = "white";
    btn2[i].style.color = "red";
  }
}
// Blok3
const blok3 = document.querySelector(".blok3");
const circle1 = document.createElement("circle");
circle1.classList.add("circle");
blok3.append(circle1);
circle1.innerHTML = "5";

const circle2 = document.createElement("circle");
circle2.classList.add("circle");
blok3.append(circle2);
circle2.innerHTML = "6";

const circle3 = document.createElement("circle");
circle3.classList.add("circle");
blok3.append(circle3);
circle3.innerHTML = "7";

const circle4 = document.createElement("circle");
circle4.classList.add("circle");
blok3.append(circle4);
circle4.innerHTML = "8";

const circle5 = document.createElement("circle");
circle5.classList.add("circle");
blok3.append(circle5);
circle5.innerHTML = "9";

const circle6 = document.createElement("circle");
circle6.classList.add("circle");
blok3.append(circle6);
circle6.innerHTML = "10";
circle6.addEventListener("mousedown", () => {
  circle6.innerHTML = parseInt(+circle6.innerHTML + 1);
});
// Blok4

const blok4 = document.querySelector(".blok4");
const square1 = document.createElement("square");
square1.classList.add("square");
square1.style.borderRadius = "100% 0 100% 0";
blok4.append(square1);
square1.innerHTML = "2";

const square2 = document.createElement("square");
square2.classList.add("square");
square2.style.borderRadius = "0 100% 0 100%";
blok4.append(square2);
square2.innerHTML = "3";

const square3 = document.createElement("square");
square3.classList.add("square");
square3.style.borderRadius = "100% 0 100% 0";
blok4.append(square3);
square3.innerHTML = "4";

const square4 = document.createElement("square");
square4.classList.add("square");
square4.style.borderRadius = "0 100% 0 100%";
blok4.append(square4);
square4.innerHTML = "5";