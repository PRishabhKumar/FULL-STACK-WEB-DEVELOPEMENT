let ip = document.createElement("input");
ip.type = "text";
document.querySelector("body").append(ip);

let button = document.createElement("button");
button.innerText = "Click me !";

document.querySelector("body").append(button);

ip.placeholder = "Username";
button.id = "btn";

let newButton = document.querySelector("#btn");
newButton.classList.add("changeButtonColour");

let heading = document.createElement("h1");
heading.innerHTML = "<u>DOM Practice</u>";

document.querySelector("body").append(heading);
heading.classList.add("changeColourToPurple");

let para = document.createElement("p");
para.innerHTML = "<b>P Rishabh Kumar</b> is practicing web dev";

document.querySeletor("body").append(para);
