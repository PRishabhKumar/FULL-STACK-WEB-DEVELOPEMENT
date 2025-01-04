// let mainImgObject = document.getElementById("mainImage");

// mainImgObject.src = "assets/creation_1.png";

// we can also access elements from their class names

let classObjects = document.getElementsByClassName("sampleClass");
console.log("Class objects : ");
console.log(classObjects);

let tagObjects = document.getElementsByTagName("p");
console.log("Tag objects : ");
console.log(tagObjects);

// now we will see about querySeelctors

//It also helps us to do the same thing of selecting the elements by tag name, class name or ID but all in one single syntax

let tagNameObjects = document.querySelector("p"); //this gives a collection of all the paragraph tags in the HTML document

let IDNameObject = document.querySelector("#sampleID");

let IDNameObjects = document.querySelectorAll("#sampleID");

let classNameObject = document.querySelectorAll(".SampleClass");

let classNameObjects = document.querySelectorAll(".SampleClass");

console.log("First occurence of an element with the given ID");
console.dir(IDNameObject);
console.log("All the elements in the document with the given ID");
console.dir(IDNameObjects);
console.log("First occurence of an element with the given class name");
console.dir(classNameObject);
console.log(
  "List of all the elements in the document with the given class name"
);
console.dir(classNameObjects);

// We can also implement nesting of elements in querySelectors as we do in CSS

let anchorInsideDiv = document.querySelectorAll("div a");
console.log("All anchor tags inside a div");
console.dir(anchorInsideDiv);

// Differences between innerText, innerContent and innerHTML

// innerText takes the content from the webpage and displays the exact same thing that is displayed on the screen

// innerContent takes the content from the HTML file tat we have written and displays everything that we have written inside that particular tag. In some cases, we may also make some part of the text inside the tag to be hidden. This part of the text will not be displayed when we display using the innerText attribute but they will be visible when we use innerContent attribute

// In the case of innerHTML, we get the entire markup for that particular element

// Here for exampl inside a paragraph we have some part of the text made bold or underlined as follows :

// <p>This is some sample text in which <b>some part of the text is made bolder</b>, <i> some part is italicized</i> <u>and some part is also underlined</u></p>

// In this case, we get the entire same thing as output what is written above

// Even while using the setAttribute() function, if we write some HTML tags in the new value to be assigned, it wont be recognized in the case of innerText() and innerContent() but it will be recognized and the changes will be seen in the output as well

// For example if we write para = document.querySelector("#myID")
// para.setAttribute(innerText, "This is the new text with <b>some part bolded</b>") -- 1
// para.setAttribute(innerHTML, "This is the new text with <b>some part bolded</b>") -- 2

// in the first statement, whatever we have written will be printed including those bold tags

// but in the case of the second statement, where we have changed the innerHTML attribute, the part of the text written inside <b></b> will be automatically bolded and printed

// we can also change the styling of the elements by accessing them through querySelectors by making use of the style property

// However this us not much frequently used as this style property only give us access to the inline styling applie to an element i.e. what we write in the style="" part inside an HTML tag but whatever we define inside the CSS file is not accessible to us.

let links = document.querySelectorAll(".box a"); //this means that we are accessing all the anchor tags which are inside the div having the class name as 'box'

for (link of links) {
  link.style.backgroundColor = "yellow";
  link.style.color = "red";
}

// Now we will see how to manipulate classes using the classList property

//classList property basically returns a collection of all the classes that are assigne to the concerned element

// There are many methods which help us to manipulate these classes also
// 1) classList.add("newClassName") ==> This adds the new class name to the element
// 2) classList.remove("nameOFClassToBeRemoved") ==> This removed the specified class name from the element
// 3) classList.contins("classNameToSearch") ==> This checks if the given class name has been given to the  element already or not
// 4) classList.toggle() ==> This helps toggle between the add and remove functions

let allParagraphs = document.querySelectorAll(
  ".classManipulationUsingclassList p"
);
let Para1 = document.querySelector("#paraInsideDiv1");
let Para2 = document.querySelector("#paraInsideDiv2");
let Para3 = document.querySelector("#paraInsideDiv3");

console.log("Class list of para 1 : ");
console.dir(Para1.classList);
console.log("Class list of para 2 : ");
console.dir(Para2.classList);
console.log("Class lit of para 3 : ");
console.dir(Para3.classList);

console.log(
  "Class list of all 3 paragraphs printed by running a loop ovre th ecollection returned by the querySelectorAll() function : "
);
i = 1;
for (para of allParagraphs) {
  console.log(`Paragraph number : ${i}`);
  console.dir(para.classList);
  i++;
}
console.log(
  "**********************ADDING CLASS NAMES ********************************************"
);

console.log("After adding a class name to the first para : ");
Para1.classList.add("firstClassName");

console.log("Updated classList for para1 : ");
console.dir(Para1.classList);

console.log(
  "**********************REMOVING CLASS NAMES *******************************************"
);

console.log("After removing the class name assigned to the first para : ");
Para1.classList.remove("firstClassName");
console.log("Updated classList for para 1 : ");
console.dir(Para1.classList);

console.log("After removing the class name assigned to the second para : ");
Para2.classList.remove("para1");
console.log("Updated classList for para 2 : ");
console.dir(Para2.classList);

console.log(
  "After removing one of the class names assigned to the third para : "
);
Para3.classList.remove("para123");
console.log("Updated classList for para3 : ");
console.dir(Para3.classList);

console.log(
  "************************************CHECKING IF A CLASS NAME EXISTS OR NOT ******************************"
);

console.log(
  `Result for whether the class name para456 is assigned to the third para or not : ${Para3.classList.contains(
    "para456"
  )}`
);

console.log(
  `Result for whether the class name para123 is assigned to the third para or not : ${Para3.classList.contains(
    "para123"
  )}`
);

// We can also use these classes to change the styling of some elements
// For this, we can define a class in teh CSS file with the required styling and then as soon as we add the class name to the element, all of that styling will automatically be applied to that element....

let number = parseInt(
  prompt("Enter the correct number to change the color of the button : "),
  10
);
if (number == 123) {
  let button = document.querySelector(".sampleButton"); //accessing the button
  button.classList.remove("sampleButton");
  button.classList.add("buttonClicked");
}

// The toggle method bascially acts as a switch for switching between the add() and remove() methods
// When a class name is passed to the toggle() function, it first checks if that particlar class exists for that element or not. If the class is already present, it removes the class, else it adds that class

// *****************************************NAVIGATION BETWEEN ELEMENTS IN JS ********************************
// There are 3 methods for navigating between elements in the DOM tree i.e. parent(), children() and previousElementSibling() and nextElementSibling()

//The first one givesss the parent of the spcified element, i.e. the tag inside which this element has been created
// The next one gives the children of the specified element i.e. all those elements created under or inside the given element
// The other 2 methods give the subling of the given element i.e. the element that have the same parent element but are not mutually nested i.e. one sibling cannot be inside another sibling element

// We also have the childElementCount() function which returns the number of children of a given element

mainDiv = document.querySelector(".navigationInJS");
childHeading = document.querySelector(".childHeading");
childParagraph = document.querySelector(".childParagraph");
childDiv = document.querySelector(".childDiv");
childUnorderedList = document.querySelector(".unorderedList");
childListItem = document.querySelector(".listItem");
console.log(`Parent of child heading is : ${childHeading.parentElement}`);
console.log(
  `Parent of the child paragraph is : ${childParagraph.parentElement}`
);
console.log(
  `Next sibling of child heading is : ${childHeading.nextSiblingElement}`
);
console.log(
  `Previous sibling of the child paragraph is : ${childParagraph.previousSiblingElement}`
);
console.log(
  `Parent of the child unordered list is : ${childUnorderedList.parentElement}`
);

// ADDING ELEMENTS USING DOM

// We can also add some elements using DOM
// There are several methods to do that
// First of all, we create a new element using the createElement() method and then add them whereever we want
// These are the methods used for the insertion of elements in a page :
// 1) appendChild() --> This is used to insert the element as a child of the element specified
// 2) append() -> This simply appends not only elements, but also text
// 3) prepend() --> This is used to add the element in the begining of another element
// 4) insertAdjacent() --> This is used to add the element adjacent to another element in 4 possible ways :
//    (I) beforeBegin --> It is used to append the element just at the begining of the specified element
//    (II) afterBegin --> It is used to append the element just after the begining of the specified element i.e. as its first child
//    (III) beforeend --> This adds the element just before the ending of the element, i.e. as its last child
//    (iv) afterend --> This adds the element just after the speficided element has ended...

let newPara = document.createElement("p");
newPara.innerText = "This is a sample paragraph....";
parent = document.querySelector(".parent");
parent.appendChild(newPara);

let newChildPara = document.createElement("p");
newChildPara.innerText = "This is a sample para for the child div";
let child = document.querySelector(".child");
child.appendChild(newChildPara);

let newButton = document.createElement("button");
newButton.innerText = "This is a sample button to test the append() function";

newChildPara.append(newButton);
newChildPara.append("Never ever click this button in your life...");
let outerPara = document.querySelector("#outerPara");

let newerButton = document.createElement("button");
newerButton.innerText =
  "This is a sample button to test the different ways of insertAdjacentElement() function";

outerPara.insertAdjacentElement("afterend", newerButton);

// we can also remove elements from teh page using teh remove() function

let removableButton = document.createElement("button");
removableButton.innerText = "This is a removable button";

let removableChild = document.querySelector(".removeChild");
removableChild.appendChild(removableButton);

removableChild.removeChild(removableButton);
