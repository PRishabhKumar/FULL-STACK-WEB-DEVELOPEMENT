let numbers = [];
let number = parseInt(
  prompt("KEEP ENTERING NUMBERS IN THE ARRAY (-1 TO STOP ENTERING)"),
  10
);
while (number != -1) {
  numbers.push(number);
  number = parseInt(prompt(""), 10);
}

number = parseInt(
  prompt(
    "Enter the number whose occurences you want to remove from the array of numbers"
  ),
  10
);
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == number) {
    numbers.splice(i, 1);
  }
}

console.log(`THE ARRAY AFTER REMOVEING ALL OCCURENCES OF ${number} IS : `);
for (number of numbers) {
  console.log(number);
}
