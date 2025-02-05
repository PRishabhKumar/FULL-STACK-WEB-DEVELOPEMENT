function generateRandomNumber() {
  let number = Math.floor(Math.random() * 256);
  return number;
}

let button = document.querySelector(".generateColour");
let newButton = document.querySelector(".btn");

button.addEventListener("click", function () {
  let red = generateRandomNumber();
  let blue = generateRandomNumber();
  let green = generateRandomNumber();
  let textDiv = document.querySelector(".mainDiv");
  let heading = document.querySelector("h1");
  textDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  heading.style.color = `rgb(${red}, ${green}, ${blue})`;
  heading.innerText = `rgb(${red}, ${green}, ${blue})`;
});

newButton.addEventListener("mouseenter", function () {
  newButton.innerHTML = "<strong><b>This is the effect</b></strong>";
  newButton.classList.add("btnChangeColor");
});

newButton.addEventListener("mouseleave", function () {
  newButton.innerHTML = "Come near me to see an effect";
  if (newButton.classList.contains("btnChangeColor")) {
    newButton.classList.remove("btnChangeColor");
  }
  newButton.classList.add("changeColourBack");
});
