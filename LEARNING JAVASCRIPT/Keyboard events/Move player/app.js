let box = document.querySelector(".box");
let ip = document.querySelector("input");
function generateRandomColour() {
  let red = Math.random() * 255;
  let green = Math.random() * 255;
  let blue = Math.random() * 255;
  let bgColor = `rgb(${red}, ${green}, ${blue})`;
  return bgColor;
}

ip.addEventListener("keydown", function (event) {
  if (
    event.key == "w" ||
    event.key == "a" ||
    event.key == "s" ||
    event.key == "d"
  ) {
    box.style.backgroundColor = generateRandomColour();
  }
  let h = box.offsetHeight;
  box.offsetHeight = h + 1;
  let w = box.offsetWidth;
  box.offsetWidth = w + 1;
});

function operationW() {
  computedStyles = getComputedStyle(box);
  let top = computedStyles.marginTop;
  console.log(top);
  return top;
}

ip.addEventListener("keydown");

// There are many form-related keyboard events as well, subtmit being the most used

// There is another important function of the 'event' parameter that is passed as default to any callback of a event i.e. preventDefault() which prevents the default action from  happening
// For eg when we write something like say '/action' in the action attribute of a form tag then as soon as we click that submit button, we will be taken to the /action page which does not exist. This can be rpevented using thisd function

// EXTRACTIVE DATA FROM A FORM
// We can access the individual elements of the form after the form has been submitted by adding the 'submit' event listener to it and then using querySelectoro() to access teh elements

// Supppose that we have a input field in the form and we want to access the usernamse or whatever the user has filled in it, then we cna make use the value() propery as innerText() will not work here
