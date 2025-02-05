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

let input = document.querySelector(".name");
input.addEventListener("change", function () {
  let text = input.value;
  let exp = /^[A-Z a-z]+$/;
  if (exp.test(text)) {
    let heading = document.querySelector(".heading");
    heading.innerText = text;
  } else {
    alert("Your name should contain only upper case and lower case alphabets");
  }
});

// There is a concept called event bubbling which basically is triggered when one or more of nested elements are accessed using querySelectoro() and some processing is done for them.
// For example, we have a div inside of which we have an u ordered list and inside it we have many list items

// Now when we acess teh div, the ul and all the li's thiourgh JS and add the "click" evenlistener with the callback as a function that prints tat teh div or the ul or the li was clicked. Now when we click the ul, we get teh message "div was clicked" and "ul weas clicked because the ul is a child of the div and clicking insdide the ul indirectly also means clicking insidevthe div as well"
// We can stop this even bubbling by using the stopPropogation() function of the 'event' object
