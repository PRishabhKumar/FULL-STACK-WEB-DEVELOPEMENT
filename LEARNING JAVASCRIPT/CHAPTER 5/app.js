console.log("NOW WE WILL SEE THE USE OF OBJECT LITERALS IN JS");
console.log(
  "Object lierals are used to store more complex data sructures in the form of multiple key-value pairs represneting the specific characterisitcs of the object."
);

let rishabh = {
  name: "P Rishbah Kumar",
  age: 20,
  gender: "Male",
  Address: "Vellore Institute of Technology, Vellore, Tamil Nadu",
  CGPA: 9.32,
};

console.log("BELOW ARE THE DETAILS FOR THE OBJECT 'rishabh' : ");
console.log(rishabh);
console.log(
  "THERE IS NO SPECIFIC ORDER IN WHICH THE KEY-VALUE PAIRS WILL BE PRINTED IN THE CONSOLE UNLIKE THE ARRTAY IN WHICH THE ORDER OF VALUES IS RETAINED"
);
console.log(
  "THE KEY'S WHAT WE SPECIFIY IN THE OBJECTS ARE ALWAYS CONSIDERED AS STRINGS NO MATTER WHAT THEIR ACTUAL DATA TYPE IS "
);
console.log(
  "THEREFORE EVEN IF WE GIVE SOME NUMBERS AS SOME KEYS, THEY WILL BE CONSIDERED AS A STRING AND NOT A NUMBER AND SAME GOES WITH OTHER DATA TYPES LIKE FLOAT, DOUBLE ALSO"
);
console.log(
  "WE CAN ALSO USE SOME RESERVED KEYWORDS LIKE TRUE, FALSE, NULL, UNDEFINED AND SO ON AS THE NAME OF THE KEYS BUT IT IS NOT CONSIDERED AS A VERY GOOD PRACTICE."
);
console.log(
  "WE CAN ALSO CREATE OBJECT OD OBJECT  i.e. NESTED OBJECTS AS SHOWN BELOW : "
);
const classInformation = {
  rishabh: {
    name: "P RISHABH KUMAR",
    reg_number: "23BCE0957",
    CGPA: 9.32,
  },
  naincy: {
    name: "NAINCY JAIN",
    reg_number: "23BCE0959",
    CGPA: 9.89,
  },
  aarjav: {
    name: "AARJAV JAIN",
    reg_number: "23BCE0979",
    CGPA: 8.88,
  },
  ashiq: {
    name: "MOHAMMED ASHIQ",
    reg_number: "23BCE1111",
    CGPA: 8.85,
  },
  anusithara: {
    name: " TR ANUSITHARA",
    reg_number: "23BCE0447",
    CGPA: 8.87,
  },
};

console.log(
  "WE CAN ALSO CREATE AN ARRAY OF SUCH OBJECT LITERALS AS SHOWN BELOW : "
);
const objectArray = [
  {
    name: "P RISHABH KUMAR",
    reg_number: "23BCE0957",
    CGPA: 9.32,
  },
  {
    name: "NAINCY JAIN",
    reg_number: "23BCE0959",
    CGPA: 9.89,
  },
  {
    name: "AARJAV JAINR",
    reg_number: "23BCE0979",
    CGPA: 8.88,
  },
  {
    name: "MOHAMMED ASHIQ",
    reg_number: "23BCE1111",
    CGPA: 8.85,
  },
  {
    name: " TR ANUSITHARA",
    reg_number: "23BCE0447",
    CGPA: 8.87,
  },
];

console.log("NOW WE WILL SEE THE CONCEPT OF FUNCTIONS IN JS : ");
//below is a simple function that printd hello to the console

function printHello() {
  console.log("HELLO EVERYONE !!");
}
console.log("THE BELOW MESSAGE IS BEING PRINTED THROUGH A FUNCTION : ");
printHello();

console.log(
  "WE CAN ALSO PASS PARAMETERS OR ARGUMENTS TO FUNCTIONS AS SHOWN BELOW : "
);

function addNumbers(x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
}

let number1 = parseInt(prompt("Enter the first number : "), 10);
let number2 = parseInt(prompt("Enter the second number : "), 10);

addNumbers(number1, number2);

console.log(
  "WE CAN ALSO MODIFY THE ADD FUNCTION ABOVE TO RETURN THE CALCULATED SUM VALUE AND WE CAN STORE IT IN SOME OTHER VARAIBLE AS SHOWN BELOW : "
);

function returnSumNumbers(x, y) {
  return x + y;
}

console.log(
  "Now we are using the function that returns the sum of the entered numbers and does not internally print it. This is visible by the fact that we are able to manipulate the sum value like calculating it's square etc..."
);

let new_number1 = parseInt(prompt("Enter the first number : "), 10);
let new_number2 = parseInt(prompt("Enter the second number : "), 10);

let new_sum = returnSumNumbers(new_number1, new_number2);

console.log("The sum of the entered numbers is : ", new_sum);
console.log(
  "The square of the sum of the entered numbers is : ",
  Math.pow(new_sum, 2)
);
console.log(
  "The cube of the sum of the entered numbers is : ",
  Math.pow(new_sum, 3)
);

console.log(
  "Now we can also assign the entire function to a variable instead of the value returned by it as shown below : "
);

let sum = function (number1, number2) {
  return number1 + number2;
};

let difference = function (number1, number2) {
  if (number1 > number2) {
    return number1 - number2;
  } else {
    return number2 - number1;
  }
};

let product = function (number1, number2) {
  return number1 * number2;
};

let quotient = function (number1, number2) {
  if (number1 > number2) {
    return number1 / number2;
  } else {
    return number2 / number1;
  }
};

let remainder = function (number1, number2) {
  if (number1 > number2) {
    return number1 % number2;
  } else {
    return number2 % number1;
  }
};

let new_number11 = parseInt(prompt("Enter the first number : "), 10);
let new_number12 = parseInt(prompt("Enter the second number : "), 10);

console.log(
  `${new_number11} + ${new_number12} = ${sum(new_number11, new_number12)}`
);
console.log(
  `${new_number11} - ${new_number12} = ${difference(
    new_number11,
    new_number12
  )}`
);
console.log(
  `${new_number11} * ${new_number12} = ${product(new_number11, new_number12)}`
);
console.log(
  `${new_number11} / ${new_number12} = ${quotient(new_number11, new_number12)}`
);
console.log(
  `${new_number11} % ${new_number12} = ${remainder(new_number11, new_number12)}`
);

console.log("NOW WE WILL SEE ABOUT HIGHER ORDER FUNCTIONS : ");
console.log(
  "Hihger order functions are those that either take one or more functions as arguments or return a function"
);
console.log(
  "An exmaple of both types of higher-order functions is shown below : "
);

//higher order function that takes one more functions as arguments

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (a > b) {
    return a / b;
  } else {
    return a / b;
  }
}

function find_remainder(a, b) {
  if (a > b) {
    return a % b;
  } else {
    return b % a;
  }
}

function calculator(a, b, add, subtract, multiply, divide, remainder) {
  console.log("Enter 1 to add the entered numbers");
  console.log(
    "Enter 2 to subtract the entered numbers and get their absolute difference"
  );
  console.log("Enter 3 to multiply the entered numbers");
  console.log(
    "Enter 4 to divide the entered numbers based on which one is larger"
  );
  console.log(
    "Enter 5 to get the remainder when the greater number is divided by the smaller one"
  );
  console.log("Enter 6 to exit");
  console.log("Start entering your choices : ");
  let choice = parseInt(prompt("Enter your first choice : "), 10);
  while (choice != 6) {
    switch (choice) {
      case 1:
        console.log(`${a} + ${b} = ${add(a, b)}`);
        break;
      case 2:
        console.log(`${a} - ${b} = ${subtract(a, b)} (Absolute differece)`);
        break;
      case 3:
        console.log(`${a} * ${b} = ${multiply(a, b)}`);
        break;
      case 4:
        console.log(
          `${a} / ${b} = ${divide(
            a,
            b
          )} (Larger number divided by the smaller one)`
        );
        break;
      case 5:
        console.log(
          `${a} % ${b} = ${find_remainder(
            a,
            b
          )} (When the larger number is divided by the smaller one)`
        );
        break;
      default:
        console.log("Invalid choice entered. Try again!!!");
    }
  }
}

let a = parseInt(
  prompt("Entter the first number to use the higher order functions : "),
  10
);
let b = parseInt(
  prompt("Enter the second number to use the higher order functions : "),
  10
);

calculator(a, b);

console.log(
  "Now we will see the higher order function that returns a function : "
);

function higherOrderReturnFunction(a, b) {
  return sum(a, b);
}

console.log(
  `Sum of ${a} and ${b} calculated using the higher order returning function is : ${higherOrderReturnFunction(
    a,
    b
  )}`
);
