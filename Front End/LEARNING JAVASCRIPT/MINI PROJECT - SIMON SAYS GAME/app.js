let body = document.querySelector("body");
let buttonContainer = document.querySelector(".btn-container");
let started = false;
let level = 0;
let highScore = 0;
let buttons = ["yellow", "red", "purple", "green"];
let heading = document.querySelector(".startGame");
let newHeading = document.createElement("h2");
newHeading.innerText = "Game started !!!";
function dispGameStarted() {
  newHeading.remove();
  body.insertAdjacentElement("afterbegin", newHeading);
}

body.addEventListener("keypress", function () {
  if (started == false) {
    dispGameStarted();
    started = true;
    levelUp();
  }
});

function gameFlashButton(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}

function levelUp() {
  userPatterns = []; // resetting the userPatter array so that after a new colour is flashed, the user has to enter the whole pattern right from the start
  level++;
  heading.innerText = `Level : ${level}`;
  let number = Math.floor(Math.random() * 4);
  let buttonColour = buttons[number];
  let FlashButton = document.querySelector(`.${buttonColour}`);
  console.log(`Button number selected : ${number}`);
  console.log(`Button Colour selected : ${buttonColour}`);
  console.log(
    `Button object sent to the flashButton() function : ${FlashButton}`
  );
  gameFlashButton(FlashButton);
  computerPatterns.push(FlashButton.id);
  console.log("Computer generated sequence : ", computerPatterns);
  userButtonPress();
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 200);
  btn;
}

function checkPatterns(number) {
  if (userPatterns[number] === computerPatterns[number]) {
    if (userPatterns.length === computerPatterns.length) {
      setTimeout(levelUp, 1000); //delaying the new flashing of the button after the users input to prevent the flashes from being too quick to be detected
    }
  } else {
    let score = level - 1;
    heading.innerHTML = `Game Over. <br>Your score was <b>${score}</b> <br>Press any key to start again`;
    endGame();
    if (score > highScore) {
      highScore = score;
      h2.innerHTML = `Congratulations on your new high score of : ${highScore}`;
    }
  }
}

function userButtonPress(event) {
  let button = event.target; //getting the button that has called this function to send to the userFlash() function
  userFlash(button);
  userPatterns.push(button.getAttribute("id"));
  console.log("User entered patterns : ", userPatterns);
  checkPatterns(userPatterns.length - 1); //passing the last index of the user sequence to check if the  last colour entered by the user is correct or not
}

let allButtons = document.querySelectorAll(".button");
for (button of allButtons) {
  button.addEventListener("click", userButtonPress);
}

// code for keeping track of the patterns

let userPatterns = [];
let computerPatterns = [];

function endGame() {
  started = false;
  userPatterns = [];
  computerPatterns = [];
  level = 0;
  body.classList.add("endGame");
  setTimeout(() => {
    body.classList.remove("endGame");
  }, 500);
}
