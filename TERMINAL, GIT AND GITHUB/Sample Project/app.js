let button1 = document.querySelector(".lightDarkModeButton");
let button2 = document.querySelector(".hoverEffectButton");
let count = 0;
button1.addEventListener("click", () => {
  let body = document.querySelector("body");
  if (count % 2 == 0) {
    if (body.classList.contains("changeToLightMode")) {
      body.classList.remove("changeToLightMode");
    }
    body.classList.add("changeToDarkMode");
    button1.innerText = "Click to change to light mode !!!";
    count++;
  } else {
    if (body.classList.contains("changeToDarkMode")) {
      body.classList.remove("changeToDarkMode");
    }
    body.classList.add("changeToLightMode");
    button1.innerText = "Click to change to dark mode !!!";
    count++;
  }
});

button2.addEventListener("mouseenter", () => {
  button2.classList.add("hover");
  console.log(button2.classList);
  button2.innerText = "Hover effect activated !!!";
});

button2.addEventListener("mouseleave", () => {
  button2.classList.remove("hover");
  button2.innerText = "Hover over me to get a cool hover effect !!!";
});
