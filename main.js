/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

let node1 = document.getElementById ("node1");
node1.textContent = 'I used the getElementById ("node1") method to access this'

//document.getElementById ("node1").innerText = 'I used the getElementById ("node1") method to access this'  = this works too.

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

let node2 = document.getElementsByClassName ("node2");
node2[0].textContent = 'I used the getElementByClassName("node2") method to access this'

// document.getElementsByClassName ("node2")[0].innerText = 'I used the getElementByClassName("node2") method to access this'  = this works too


// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3s = document.getElementsByTagName("h3");
for  (let node of h3s) {
   node.innerText = 'I used the getElementByTagName("h3") method to access all of these'
}



/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/
// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
let p =  document.createElement("p");
p.textContent = 'I used the getElementByTagName("h3") method to access all of these';

// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.getElementById ("parent");
parent.appendChild(p);

// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <p> tag"
let a = document.createElement("a");
a.innerText = 'I am an <a> tag';

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(a, p);

// BONUS: Add a link href to the <a>
a.href = "https://google.com";




/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
// TODO: Remove the "New Child Node"

let oldP = document.getElementById ("N1");
let parent3 = document.getElementById("excercise3");


/* or this way document.getElementById ("N1").innerText = 'New Child Node'
exercise3.removeChild(N1); */


/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left
// BONUS - Make the red box go all the way around the perimeter of the green box */

//this is how I did it. Below is how he did it
let time = setInterval(move, 100);
let boxPosition = 0;                         //this is where it starts 0 left side

let boxs = document.getElementById("boxs");   //he used offsetwidth so if things change it should not matter
function move () {
   if (boxPosition >=150) {               
      clearInterval(timer);
   } else {
      boxPosition +=1;
      boxs.style.left = boxPosition + "px";   //px is pixels
   } 
}

//his way
let box = document.getElementById("box"); 
let container = document.getElementById ("container");
let posX = 1;  

let moveInterval = setInterval(moveBox, 100);

function moveBox () {
   if (posX <= container.offsetWidth - box.offsetWidth) {
      box.style.left = posX + "px";
      posX++;                          //after so it doesn't go to 151position
   } else {
      clearInterval(moveInterval);
   }
}

/* this actually makes it jump down and move diagonally bottom-left to upper-right, not what I wanted
let timer = setInterval(move, 100);
let boxPosition = 0;

let box = document.getElementById("box");
function move () {
   if (boxPosition >=150) 
   {
      clearInterval(timer);
   } else {
      boxPosition +=1;
      box.style.left = boxPosition + "px";
      box.style.bottom = boxPosition + "px";
   }
}

this makes it jump to the bottom and move up.
let timer = setInterval(move, 100);
let boxPosition = 0;

let box = document.getElementById("box");
function move () {
   if (boxPosition >=150) 
   {
      clearInterval(timer);
   } else {
      boxPosition +=1;
      box.style.bottom = boxPosition + "px";
   }
}

while this will move it diagonally from top-left to bottom-right, none of which I want to do
let timer = setInterval(move, 100);
let boxPosition = 0;

let box = document.getElementById("box");
function move () {
   if (boxPosition >=150) 
   {
      clearInterval(timer);
   } else {
      boxPosition +=1;
      box.style.left = boxPosition + "px";
      box.style.top = boxPosition + "px";
   } 
}
*/

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show(){
   let modal = document.createElement ("div");
   modal.style.zIndex = 10;
   modal.style.position = "fixed";
   modal.style.background = "red";
   modal.style.left = 0;
   modal.style.top = 0;
   modal.style.width = "100%";
   modal.style.height = "100%";
   let modalP = document.createElement ("p");
   let modalBtn= document.createElement ("button");

   modalP.textContent = "Clicking the button triggers the onclick event, which calls the JS function show ()... which alerts the user";
   modal.appendChild(modalP);
   document.body.appendChild(modal);
}

let btn = document.getElementById ("btn");
btn.addEventListener("click", show);

/* this just bring s up an alert
function show(){
      alert ('Clicking the button triggers the onclick event, which calls the JS function show ()... which alerts the user');
}
*/

