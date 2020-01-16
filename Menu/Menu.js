/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

let elementTags = [
  { name: "MenuBoard", tagName: "div", props: { className: "menu" } },
  { name: "Menulist", tagName: "ul", props: {} },
  { name: "Students", tagName: "li", props: {} },
  { name: "Faculty", tagName: "li", props: {} },
  { name: "What's New", tagName: "li", props: {} },
  { name: "Tech Trends", tagName: "li", props: {} },
  { name: "Music", tagName: "li", props: {} },
  { name: "Log Out", tagName: "li", props: {} }
];
// takes to arguments, an array of objects and an array, returns an array of objects
// maps through objects in first argument Array, if objects tagName is li it will add the appropriate
// textContent from the second array argument to the objects props property
function joiner(obj, obj2) {
  let count = 0;
  const returnArray = obj.map(element => {
    if (element.tagName == "li") {
      element.props = { textContent: obj2[count++] };
    }
    return element;
  });
  return returnArray;
}
// Create function for generating and returning HTML tag elements, returns html tag element
//takes 1 argument that is an object and  genertes an HTML tag based on objects tagName property
// and optional props property containing all key:values needed for tag's properties (ids, classes etc)
function cardCreator(obj, obj2 = []) {
  return Object.assign(document.createElement(obj.tagName), obj.props || {});
}

// Stitching function appends html objects together
// takes two arguments, a parent and an optional child element, returns the parent
//could be potentially chained recurssively ex stitcher(parent,sticher(secondParen,child))
function stitcher(parent, child = null) {
  if (child) {
    if (!(parent == child)) {
      parent.appendChild(child);
    }
  }
  return parent;
}

// looper light Array, takes 2 parameters an object with a default value of an empty array
// and a cb function,returns an array
// loops through elements in obj parameter and passes each to cb function

function looperLite(obj = [], cb) {
  const loopArray = [];
  for (element of obj) {
    loopArray.push(cb(element));
  }
  return loopArray;
}

// function menuConstructor(menu, tags) {
//   const menuArray = looper(menu.length, tags, cardCreator);
//   console.log(menuArray);
// }

// menu constructor takes 2 arrays or objects as parameters

function menuConstructor(data, skeleton) {
  // tags the passed objects and passes them to the joiner function and stores
  // returned values in a intermediate array
  const joinedArray = joiner(elementTags, menuItems);

  // takes intermediate array and a callback passes it to looperlite function
  // stores returned value in primary array
  const constructorArray = looperLite(joinedArray, cardCreator);

  // Adds event listener to button
  document.querySelector(".menu-button").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("menu--open");
  });
  // loops through primary array and if the index of the element is above 1 (i.e the li elements)
  // it passes the element as a child and ul (primary array index 1) element as a parent to stitcher function
  constructorArray.forEach((element, index) => {
    if (index > 1) {
      stitcher(constructorArray[1], element);
    }
  });
  // recursively calls stitcher function to append ul to main menu div and then
  // main menu div to header section of page
  stitcher(
    document.querySelector(".header"),
    stitcher(constructorArray[0], constructorArray[1])
  );
}

// call to menu constructor passing in menu item array and elementTag array
menuConstructor(menuItems, elementTags);
/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.
  
  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
