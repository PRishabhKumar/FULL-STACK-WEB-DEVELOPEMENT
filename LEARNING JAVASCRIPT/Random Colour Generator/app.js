function generateRandomNumber() {
  let number = Math.floor(Math.random() * 256);
  return number;
}

let button = document.querySelector(".generateColour");

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
