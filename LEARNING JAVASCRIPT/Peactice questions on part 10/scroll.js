let div = document.querySelector("div");

function generateRandomColour() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${blue}, ${green})`;
}

div.addEventListener("scroll", function () {
  div.style.backgroundColor = generateRandomColour();
  div.classList.add("scroll");
});
