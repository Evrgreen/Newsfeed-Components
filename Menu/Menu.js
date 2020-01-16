/* This is the data we will be using, study it but don't change anything, yet. */

// let menuItems = [
//   "Students",
//   "Faculty",
//   "What's New",
//   "Tech Trends",
//   "Music",
//   "Log Out"
// ];
// Create function for generating and returning HTML tag elements, returns html tag element
//takes 2 arguments a tagname and an optional object containing all key:values needed for tag's properties (ids, classes etc)
function create(tagName, props) {
  return Object.assign(document.createElement(tagName), props || {});
}

function cardCreator(obj, obj2) {
  return Object.assign(document.createElement(obj2.tagName), obj2.props || {});
}
// Stitching function appends html objects together
// takes two arguments, a parent and an optional child element, returns the parent
//could be potentially chained recurssively ex stitcher(parent,sticher(secondParen,child))
function stitcher(parent, child = null) {
  if (child) {
    parent.appendChild(child);
  }
  return parent;
}
//Contructor function for cards, takes 2 arguments, an object for text content and an object with
//  a tagName and an optional subobject of properties, returns a complete stitched together card
function looper(obj1, obj2 = [], cb) {
  const returnArray = [];
  obj1.forEach((element, index) => {
    const tempArray = [];
    obj2.forEach((element2, index2) => {
      tempArray.push(cb(obj1, obj2));
    });
    returnArray.push(tempArray);
  });
}
function menuConstructor(menu, tags) {}

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
