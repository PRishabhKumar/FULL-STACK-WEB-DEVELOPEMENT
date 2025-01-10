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
