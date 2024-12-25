console.log(
  "NOW WE WILL PRINT THE MULTIPLICATI TABLE OF A NUMBER ENTERED BY A USER : "
);
let number = parseInt(
  prompt("ENTER THE NUMBER WHOSE MULTIPLICATIO YOU WANT : ")
);
for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + number * i);
}
