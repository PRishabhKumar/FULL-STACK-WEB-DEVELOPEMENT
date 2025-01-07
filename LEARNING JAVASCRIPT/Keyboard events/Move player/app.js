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



