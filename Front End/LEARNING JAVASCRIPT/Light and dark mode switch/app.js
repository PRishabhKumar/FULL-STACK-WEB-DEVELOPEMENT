let body = document.querySelector("body");
let button = document.querySelector("button");
let violet = document.querySelector(".violet");
let indigo = document.querySelector(".indigo");
let blue = document.querySelector(".blue");
let green = document.querySelector(".green");
let yellow = document.querySelector(".yellow");
let orange = document.querySelector(".orange");
let red = document.querySelector(".red");

let outerDiv = document.querySelector(".outer");
let innerDiv = document.querySelector(".inner");

let count = 0;
function darkMode() {
  body.classList.add("dark");
  violet.classList.add("violetDark");
  indigo.classList.add("indigoDark");
  blue.classList.add("blueDark");
  green.classList.add("greenDark");
  yellow.classList.add("yellowDark");
  orange.classList.add("orangeDark");
  red.classList.add("redDark");
  outerDiv.classList.add("reverseMarginDirection");
  outerDiv.classList.add("setBorderWhite");
  innerDiv.classList.add("setBorderWhite");
  count = 1;
}

function lightMode() {
  body.classList.add("light");
  violet.classList.add("violetLight");
  indigo.classList.add("indigoLight");
  blue.classList.add("blueLight");
  green.classList.add("greenLight");
  yellow.classList.add("yellowLight");
  orange.classList.add("orangeLight");
  red.classList.add("redLight");
  outerDiv.classList.add("restoreMarginDirection");
  outerDiv.classList.add("setBorderBlack");
  innerDiv.classList.add("setBorderBlack");
  count = 0;
}

innerDiv.addEventListener("click", function () {
  if (count == 0) {
    darkMode();

    if (outerDiv.classList.contains("setBorderBlack")) {
      outerDiv.classList.remove("setBorderBlack");
    }

    if (innerDiv.classList.contains("setBorderBlack")) {
      innerDiv.classList.remove("setBorderBlack");
    }

    if (outerDiv.classList.contains("reverseMarginDirection")) {
      outerDiv.classList.remove("reverseMarginDirection");
    }

    if (body.classList.contains("light")) {
      body.classList.remove("light");
    }

    if (indigo.classList.contains("indigoLight")) {
      indigo.classList.remove("indigoLight");
    }

    if (blue.classList.contains("blueLight")) {
      blue.classList.remove("blueLight");
    }

    if (green.classList.contains("greenLight")) {
      green.classList.remove("greenLight");
    }

    if (yellow.classList.contains("yellowLight")) {
      yellow.classList.remove("yellowLight");
    }

    if (orange.classList.contains("orangeLight")) {
      orange.classList.remove("orangeLight");
    }

    if (red.classList.contains("redLight")) {
      red.classList.remove("redLight");
    }

    if (violet.classList.contains("violetLight")) {
      violet.classList.remove("violetLight");
    }
  } else {
    if (outerDiv.classList.contains("setBorderWhite")) {
      outerDiv.classList.remove("setBorderWhite");
    }

    if (innerDiv.classList.contains("setBorderWhite")) {
      innerDiv.classList.remove("setBorderWhite");
    }

    if (outerDiv.classList.contains("restoreMarginDirection")) {
      outerDiv.classList.remove("restoreMarginDirection");
    }

    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
    }

    if (indigo.classList.contains("indigoDark")) {
      indigo.classList.remove("indigoDark");
    }

    if (blue.classList.contains("blueDark")) {
      blue.classList.remove("blueDark");
    }

    if (green.classList.contains("greenDark")) {
      green.classList.remove("greenDark");
    }

    if (yellow.classList.contains("yellowDark")) {
      yellow.classList.remove("yellowDark");
    }

    if (orange.classList.contains("orangeDark")) {
      orange.classList.remove("orangeDark");
    }

    if (red.classList.contains("redDark")) {
      red.classList.remove("redDark");
    }

    if (violet.classList.contains("violetDark")) {
      violet.classList.remove("violetDark");
    }
    lightMode();
  }
});

let glowButton = document.querySelector(".glowButton");

glowButton.addEventListener("mouseenter", function () {
  glowButton.classList.add("glowEffect");
  let body = document.querySelector("body");
  if (body.classList.contains("makeBackgroundWhite")) {
    body.classList.remove("makeBackgroundWhite");
  }
  body.classList.add("makeBackgroundBlack");
  glowButton.innerHTML = "<b><strong>Effect activated !!!</strong></b>";
});

glowButton.addEventListener("mouseleave", function () {
  glowButton.innerHTML = "Come near me to see an effect !!!";
  glowButton.classList.remove("glowEffect");
  let body = document.querySelector("body");
  if (body.classList.contains("makeBackgroundBlack")) {
    body.classList.remove("makeBackgroundBlack");
  }
  body.classList.add("makeBackgroundWhite");
});
