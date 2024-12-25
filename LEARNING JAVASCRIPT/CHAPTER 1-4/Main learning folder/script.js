console.log("NOW WE WILL LEARN ABOUT ALERTS AND WARNINGS : ");
console.log(
  "THIS IS A NORMAL TEXT WHICH GET'S PRINTED ON THE CONSOLE AS IT IS"
);
console.warn(
  "THIS IS A WARNING MESSAGE WHICH GETS PRINTED ON THE CONSOLE WITH A SPCIFIC FORMATTING TO HIGHLIGHT THE FACT THAT IT IS AN ERROR OR A WARNING MESSAGE"
);
// alert("THIS IS HOW ALERTS WORKING IN JAVASCRIPT !!!");

console.log("NOW WE WILL LEARN ABOUT THE STRING METHODS : ");

let string = "    My name is P Rishabh Kumar     ";

console.log("THE ORIGNAL STRING IS : " + string);
console.log("THE TRIMMED STRING IS : " + string.trim());
console.log(
  "THE ENTIRE STRING CONVERTED TO THE UPPER CASE IS : " + string.toUpperCase()
);
console.log(
  "THE ENTIRE STIRNG CONVERTERD TO THE LOWER CASE IS : " + string.toLowerCase()
);
console.log("NOW WE WILL SEE THE indexOf() METHOD: ");
console.log("THE INDEX OF 'My' IN THE STRING IS : " + string.indexOf("My"));
console.log("THE INDEX OF 'name' IN THE STRING IS : " + string.indexOf("name"));
console.log("THE INDEX OF 'is' IN THE STRING IS : " + string.indexOf("is"));
console.log(
  "THE INDEX OF 'P Rishabh Kumar' IN THE STRING IS : " +
    string.indexOf("P Rishabh Kumar")
);
console.log(
  "THE INDEX OF 'Penumarthy' IN THE STRING IS : (this returns -1 because the given subtring is not present in the orignal stirng) : " +
    string.indexOf("Penumarthy")
);

console.log("NOW WE WILL SEE THE SLICE METHOD : ");
console.log(
  "THE SLICE METHOD RETURNS A PART OF THE ORIGNAL STRING BASED ON THE INDICES PROVIDED AS A NEW STRING"
);
console.log(
  "SLICING THE STRING FROM THE 5th INDEX TILL THE END ",
  string.slice(5)
);
console.log(
  "SLICING THE STRING FROM THE 4TH TO THE 9TH INDEX IN THE ORIGNAL STRING : " +
    string.slice(4, 9)
);
console.log(
  "IF WE HAVE A NUMBER 'n' AND WE WANT TO SLICE THE LENGTH FROM THE INDEX l-n WHERE l IS THE LENGTH OF THE STRING THEN WE CAN SIMPLY WRITE THE FUNCTION AS string.slice(-n) AS SHOWN BELOW : "
);
// let number = prompt(
//   "ENTER THE NUMBER OF THE INDEX FOR WHICH YOU WANT THE SLICED STRING FROM l-n WHERE l IS THE LENGTH OF TH STRING : "
// );
// console.log(
//   "THE STRING SLICED FROM " +
//     (string.length - number) +
//     " IS : " +
//     string.slice(-number)
// );

console.log("NOW WE WILL SEE THE REPLACE METHOD : ");
let new_string = "I LOVE CODING VERY MUCH";
console.log("THE ORIGNAL STRING IS : " + new_string);
console.log(
  "REPLACING THE WORD 'LOVE' WITH 'HATE' IN THE ORIGNAL STRING : " +
    new_string.replace("LOVE", "HATE")
);

console.log(
  "NOW WE WILL SEE THE REPEAT METHOD WHICH IS USED TO PRINT THE SAME MESSAGE OR THE SAME STRING AGAIN AND AGAIN AS SHOWN BELOW : "
);
console.log("THE STRING PRINTED FIVE TIMES IS : " + new_string.repeat(5));

let names = [
  "P RISHABH KUMAR",
  "PRATHAM PATIL",
  "RAJVI SOLNAKI",
  "VRUSHALI",
  "AARJAV JAIN",
  "NAINCY JAIN",
  "T R ANUSITHARA",
  "MOHAMMED AASHIQ",
];
console.log("NAMES OF THE STUDENTS ARE : ");

console.log(names);
console.log("NOW WE WILL SEE ABOUT ARRAY REFERENCES : ");
console.log(
  "THE CONCE[T OF ARRAY REFERENCES STATES THAT WHENEVER AN ARRAY IS CREATED IN JS, THE ADDRESS OF TEH 0th INDEX IS KNOWN TO THE COMPILER AND HENCE EVEN IF TWO EXACT SAME ARRAYS ARE COMPRARED USING THE == OR THE === OPERATOR THEN JS RETURNS FALSE WHEREAS THIS IS NOT TEH CASE WITH STRINGS AS AS SHOWN IN THE EXAMPLE BELOW : "
);
console.log(
  "THERE ARE TWO STRING BOTH OF WHICH ARE THE SAME I.E. 'RISHABH' AND WHEN THEY ARE COMPARED WITH AND WITHOUT STORING THEM IN A VARIALBE JS ALWAYS RETURNS TRUE : "
);
let string1 = "RISHABH";
let string2 = "RISHABH";
console.log(
  "UPON EXECUTING THE COMMAND string1 == string2, WE GET THE ANSWER AS : " +
    (string1 == string2)
);
console.log(
  "UPON EXECUTING THE COMMAND string1 === string2, WE GET THE ANSWER AS : " +
    (string1 === string2)
);
console.log(
  "UPON EXECUTING THE COMMAND 'RISHABH' == 'RISHABH', WE GET THE ANSWER AS : " +
    ("RISHABH" == "RISHABH")
);
console.log(
  "UPON EXECUTING THE COMMAND 'RISHABH' == 'RISHBAH', WE GET THE ANSWER AS : " +
    ("RISHABH" == "RISHABH")
);

console.log(
  "NOW WE WILL SEE THE SAME THING FOR ARRAYS ALSO BY BOTH STORING THEM IN A VARIABLE AS WELL AS WITHOUT STORING ."
);
let number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(
  "UPON EXECUTING THE COMMAND number1==number2, WE GET TEH RESULT AS : " +
    (number1 == number2)
);
console.log(
  "UPON EXECUTING THE COMMAND number1===number2, WE GET TEH RESULT AS : " +
    (number1 == number2)
);
console.log(
  "UPON EXECUTING THE COMMAND [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]==[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] WE GET TEH RESULT AS : " +
    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] == [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);
console.log(
  "UPON EXECUTING THE COMMAND [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]===[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], WE GET TEH RESULT AS : " +
    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);

console.log(
  "HOWEVER WHEN WE CREATE AN ARRAY AND ANOTHER EMPTY ARRYA AND THEN ASSIGN THE FIRST ARRAY TO THE EMPTY ONE USING ASSIGNMENT OPERATOR, THEN THE EQUALITYOPERATOR WILL RESULT IN TRUE AND ALSO ANY CHANGES MADE IN EITHER OF THE TWO ARRAY WILL REFLECT IN THE OTHER ONE ALSO AS SHOWN BELOW"
);
let number11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let number12 = []; //empty array
console.log("INITIALLY, number11 IS : ", number11);
console.log("INITIALLY, number12 IS : ", number12);
number12 = number11; //assigning the first array to the second one
console.log("AFTER ASSIGNING number11 TO number12, number11 is : " + number11);
console.log("AFTER ASSIGNING number11 TO number12, number12 is : " + number12);
console.log(
  "UPON EXECUTING THE COMMAND number11==number12, WE GET : " +
    (number11 == number12)
);
console.log(
  "UPON EXECUTING THE COMMAND number11===number12, WE GET : " +
    (number11 === number12)
);
console.log("PUSHING THE NUMBER 11 INTO NUMBER11....");
number11.push(11);
console.log("AFTER INSERTING 11 IN number11, number11 IS : " + number11);
console.log("AFTER INSERTING 11 IN number11, number12 IS : " + number12);
console.log("POPPING A NUMBER FROM number12....");
console.log("POPPED NUMBER IS : " + number12.pop());
console.log("AFTER POPPING, number11 IS : " + number11);
console.log("AFTER POPPING, number12 IS : " + number12);
console.log("NOW WE WILL SEE THE CONCEPT OF NESTED ARRAYS IN JS");
let numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
];
let single_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("THE 1-D ARRAY LOOKS LIKE : ");
console.log(single_numbers);
console.log("THE 2-D ARRAY LOOKS LIKE : ");
console.log(numbers);
console.log(
  "UPON ACESSING THE ELEMENTS OF 1-D ARRAY i.e. THE COMMAND console.log(single_numbers[1]), WE GET THE NUMBER AT THAT PLACE AS THE OUTPUT AS SHOWN BELOW: ;"
);
console.log(single_numbers[1]);
console.log(
  "HOWEVER ON ACCESSING THE ELEMENTS OF A 2-D ARRAY USING A SINGLE INDEX, WE GET THE SUB-ARRAY AT THAT LOCATION  i.e. THE OUTPUT OF THE COMMAND console.log(numbers[1]); WILL BE THE SUB-ARRAY AT THE 1ST INDEX IN THE ARRAY AS SHOW BELOW : "
);
console.log(numbers[1]);

console.log(
  "NOW WE WILL SEE A NEW AND RECENT TYPE OF LOOP IN JS THAT IS THE 'for of' LOOP"
);

console.log(
  "HERE WE HAVE CREATED AN ARRAY OF NUMBER WHERE THE NUMBERS ARE BEING FILLED BY THE USER HIMSELF AND THEN WE WILL DISPLAY THE ORIGNAL ARRAY, THE SQUARES OF THE NUMBERS IN THE AND THE CUBES OF THE NUMBERS IN THE ARRAY USING THE for-of LOOP"
);

let n = parseInt(prompt("Enter the size of the array you want : "), 10);
let integer_numbers = new Array(n); //creating an empty array
console.log(`Now enter ${n} numbers in the created array : `);
for (let i = 0; i < n; i++) {
  let ip_number = parseInt(
    prompt(`Enter the element for index number ${i + 1} : `),
    10
  );
  integer_numbers.push(ip_number);
}
console.log("The entered array is : ");
for (num of integer_numbers) {
  console.log(num);
}
console.log("The array of sqaures of the numbers in the entered array is : ");
for (num of integer_numbers) {
  console.log(num * num);
}
console.log("The array of cubes of the numbers in the entered array is : ");
for (num of integer_numbers) {
  console.log(num * num * num);
}
console.log(
  "NOW WE WILL SEE THE USE OF for-of LOOP IN NESTED LOOPS AND NESTED ARRAY : "
);
let r = parseInt(prompt("ENTER THE NUMBER OF ROWS YOU WANT : "), 10);
let c = parseInt(prompt("ENTER THE NUMBER OF COLUMNS YOU WANT : "), 10);
let double_numbers = Array(r)
  .fill(null)
  .map(() => Array(c).fill(0)); //declaring an empty 2D array
console.log(`NOW ENTER ${r * c} NUMBERS IN CREATED ARRAY : `);
for (let i = 0; i < double_numbers.length; i++) {
  console.log(`SUB-ARRAY NUMBER ${i + 1} : `);
  for (let j = 0; j < double_numbers[i].length; j++) {
    let new_n = parseInt(prompt(`ENTER ELEMENT FOR POSITION [${i}, ${j}]`));
    double_numbers[i][j] = new_n;
  }
}
console.log("NOW ACCESSING THE NUMBERS IN THE ARRAY : ");
let temp = 0;
for (num_array of double_numbers) {
  console.log(`SUB-ARRAY NUMBER ${temp + 1}`);
  for (temp_number of num_array) {
    console.log(temp_number);
  }
  temp++;
}
