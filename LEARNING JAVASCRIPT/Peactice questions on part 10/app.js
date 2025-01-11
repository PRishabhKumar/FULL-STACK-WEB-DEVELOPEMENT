let div = document.querySelector(".testMouseOut");

div.addEventListener("mouseenter", (event) => {
  div.innerText = "Mouse has now entered this div";
  if (div.classList.contains("onMouseOut")) {
    div.classList.remove("onMouseOut");
  }
  div.classList.add("onMouseIn");
});

div.addEventListener("mouseout", (event) => {
  div.innerText = "Mouse is not inside this div now";
  if (div.classList.contains("onMouseIn")) {
    div.classList.remove("onMouseIn");
  }
  div.classList.add("onMouseOut");
});

let keyPressDiv = document.querySelector(".testKeyPress");

let count = 1;
keyPressDiv.addEventListener("keypress", function () {
  keyPressDiv.innerText = `Key Press detected for ${count++} times !!`;
  if (keyPressDiv.classList.contains("keyRelease")) {
    keyPressDiv.classList.remove("keyRelease");
  }
  keyPressDiv.classList.add("keyPress");
});

keyPressDiv.addEventListener("keyup", function () {
  keyPressDiv.innerText = "Key has been released !!!";
  if (keyPressDiv.classList.contains("keyPress")) {
    keyPressDiv.classList.remove("keyPress");
  }
  keyPressDiv.classList.add("keyRelease");
});




