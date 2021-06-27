let mains = document.getElementsByTagName("main");  //getElementsByTagName with elements with an s plural
let headings = document.getElementsByClassName("heading");
let paras = document.getElementsByClassName("content"); // console.log(main[0]);
let a = document.getElementById("navigation");
let firstChild = document.getElementById("firstSection")

//change the paragraph ontents.
paras[0].textContent= "I just changed you"
paras[1].style.color = "red"
mains[0].id = "homeContent"
/*
//create new element
let newElement = document.createElement("section");

mains[0].insertBefore(newElement, firstChild);

let button = document.createElement("button");
button.texContent = "Sign Up";
//firstChild.replaceChild(button, paras[1]);

firstChild.replaceChild(button, paras[1]);
firstChild.removeChild(a);

*/