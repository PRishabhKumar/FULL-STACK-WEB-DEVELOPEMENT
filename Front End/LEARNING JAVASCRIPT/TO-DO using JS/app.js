let input = document.querySelector("input");
let ul = document.querySelector("ul");
let button = document.querySelector("button");

let listItems = [];

button.addEventListener("click", function () {
  let text = input.value;
  input.value = "";
  let li = document.createElement("li");
  li.innerText = text;
  listItems.push(li);
  ul.appendChild(li);
  let btn = document.createElement("button");
  btn.innerText = "Delete";
  li.appendChild(btn);
  btn.classList.add("delete");
  btn.addEventListener("click", function () {
    let parent = btn.parentElement;
    parent.remove();
    setTimeout(function () {
      alert("Event deleted successfully !!!");
    }, 100);
  });
});

input.addEventListener("keydown", function () {
  if (event.key == "Enter") {
    let text = input.value;
    input.value = "";
    let li = document.createElement("li");
    li.innerText = text;
    listItems.push(li);
    ul.appendChild(li);
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    li.appendChild(btn);
    btn.classList.add("delete");
    btn.addEventListener("click", function () {
      let parent = btn.parentElement;
      parent.remove();
      setTimeout(function () {
        alert("Event deleted successfully !!!");
      }, 100);
    });
  }
});
