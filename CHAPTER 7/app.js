console.log("Here we will see about the 'this' keyword first");
console.log(
  "'this' keyword is used to refer to the object that is currently calling the concerned method or accessing the varaible"
);
console.log("An example of thisw is shown below : ");
const student = {
  name: "P Rishabh Kumar",
  age: 20,
  m1: 100,
  m2: 99,
  m3: 98,
  get_average() {
    return (this.m1 + this.m2 + this.m3) / 3.0;
  },
};

console.log(
  "Now when we try to call the get_average() function, it will give an error saying that the varaibles m1, m2 and m3 are not defined"
);
console.log(
  "Hnece to resolve this error, we have to add the 'this' keyword before eacho of the varaibles used in the function declaration as the varaibles of the objects are not directly accessible insdide the functions who are also a member of the object or even otherwise"
);
console.log(
  "The role of 'this' keyword is to specifiy that we want to access the value of m1, m2 and m3 of the currently calling object"
);

console.log(
  `The average value of the marks of ${
    student.name
  } is : ${student.get_average()}`
);

console.log("");
console.log("");
console.log("");
console.log("");

console.log(
  "Now we will see Exception Handling in JS i.e. the use of try-catch blocks"
);

console.log(
  "The try block allows one to test a piece of code for presence of errors and run it normally in case no error are detected"
);
console.log(
  "The 'catch' bloc allows you to write the warning messages or the lines of code that should be executed when there is any error in the code mentioned in the 'try' block"
);
let a = 120;
try {
  console.log("The value of a is : ", a);
} catch {
  console.log("The varaible 'a' is not defined !!");
}

console.log(
  "The above few lines of code executes ormally in the 'try' block when there is a varaible named 'a' defined and assigned some value but if it is oot so, then the code written in the catch block is executed and it prints the statement highlighting the absence of the variable"
);

// Arrow functions

const Sum = (number1, number2) => {
  return number1 + number2;
};

let number1 = parseInt(prompt("Enter the first number : "), 10);
let number2 = parseInt(prompt("Enter the second number : "), 10);

console.log("The sum of the enterd numbers is : " + Sum(number1, number2));

console.log(
  "The setTimeout() function is used to execute some code after a certain interval of time, it takes another function and a number as paramters which shows after how many ms, will the functions passed should get executed..."
);

console.log("Hello my name is ");

setTimeout(() => {
  //this part will get executed 4s (= 4000ms) later
  console.log("P Rishabh Kumar");
}, 4000);

console.log(" and I like coding very much !!");

//use of this keyword in the case of arrow functions

console.log(
  "In normal functions, the 'this' keywor refers to the current object that has called the function but in the case of arroa functions, it is not so..."
);
console.log(
  "In teh cse of arrow functions, 'this' keyword refers to the scope of the calling object"
);

const answer = (number1, number2) => {
  return number1 + (number1 > number2 ? number1 - number2 : number2 - number1);
};

console.log(
  `The sum of 3 and the absolute difference between 3 and 5 is : ${answer(
    3,
    5
  )}`
);

console.log(
  "In the case of norma; functions, the 'this' keyword refers to the objects that has called it"
);
console.log(
  "However in the case of arrow functions, the 'this' keyword inherits the scope of the parent"
);

const Student = {
  name: "P Rishabh Kumar",
  age: 20,
  marks: 95,
  property: this,
  get_name: function () {
    //this is a normal function
    return this.name;
  },
  get_arrow_name: () => {
    return this;
  },
  get_this: function () {
    //here
    console.log(this);
  },
  get_arrow_this: () => {
    console.log(this);
  },
};

// in the above case when we print the value of the property varaible, we get the Window object as the answer as the scope of the object is global and hence we get the window object
// when we print value of 'this' for the Student object, it gives the window object as the scope of Student is the global scope but when we print it from a function, it gives the student object as it is the Student object that is calling the function
//also in the function get_name(), the 'this' refers to the object that is calling it which is the 'Student' object which  has global scope
// now when we print the value of 'this' using the normal get_this() function, we get the answeras the Student object which is the scope of that function and it is the Student object that is calling that function

// However in the case of the arrow function, it inherits the scope of the calling object i.e. the scope of the Student object ans hence we will get the window object again as the answer as the Student object has global scope

// Now we will see some good use of this variation in the definition of 'this' for normal and arrow functions

const test_difference_of_this = {
  getInfo1: function () {
    //thus will print the value of 'this' in teh case of this particular function after 2s
    setTimeout(() => {
      console.log(
        "Value of this when an arrow function is passed as call back for the setTimeout() function : "
      );
      console.log(this);
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(
        "Value of 'this' when a normal function is passed as callback to the setTimeout() function : "
      );
      console.log(this);
    }, 4000);
  },
  CallBothFunction: function () {
    this.getInfo1();
    this.getInfo2();
  },
};

// When getInfo1() is executed, we get the 'test_difference_of_this' object as the answer because arrow functions inherit the scope of their parent and in this case the parent of the arrow function is getInfo1() whose scope is the 'test_difference_of_this' object

// When getInfo2() is executed, we get the window object as the answer because it is the 'test_difference_of_this' object that has called the function and it has global scope

// NOW WE WILL SEE SOME ARRAY FUNCTIONS

// 1) First is the forEach() method
// Using this, we can apply a particular functionality to each and every element fo the array

let numbers123 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Now we will define a simple arrwo functoin to calculate the sqaure of a number

const square_number = (number) => {
  console.log(number * number);
};

console.log("Squares of the numbers in the array : ");

numbers123.forEach(square_number);

// We can also give the function definition directly inside the forEach() function as shown below

console.log("Cubes of the numbers in the array : ");

numbers123.forEach(function (number) {
  console.log(number ** 3);
});

// Now we will see the map() function

// map() function basically does some operation on evry element of the array and creates a new array and stores the reslut of that operation on every element in that array
let students = [
  {
    name: "P Rishabh Kumar",
    marks: 93,
  },
  {
    name: "Rajvi Solanki",
    marks: 95,
  },
  {
    name: "Vrushali",
    marks: 94,
  },
  {
    name: "Pratham Patil",
    marks: 97,
  },
  {
    name: "Aastha Pathak",
    marks: 96,
  },
];

let cgpa = students.map((student) => {
  return student.marks / 10;
});

// Next, we will see the filter() function

// filter() function basically filters some elements from the array based on some specified conditions

let numbers1234 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let even_numbers = numbers1234.filter((number) => {
  return number % 2 == 0;
});

let odd_numbers = numbers1234.filter((number) => {
  return number % 2 == 1;
});

// in the above code, for the case of even_numbers, a number will be added to this array only if the arrow function returns true for it. Samee goes in the case of odd_numbers as well

// Now, we will see the every() function
// every() function basically accepts a function as a call back which is bsically a conditional function and if this function returns true for all elements of the array,  then the every() function also return true. However, if even a single element gives false value with the callback function, the every() function returns false

let EvenNumbers = [0, 2, 4, 6, 8, 10];
let OddNumbers = [1, 3, 5, 7, 9];

console.log(
  "The value returned by the every() function when the condition to check if a number is even is given to the EvenNumbers array is : ",
  EvenNumbers.every((number) => {
    return number % 2 == 0;
  })
);
console.log(
  "The value returned by the every() function when the condition to check if a number is odd is given to the EvenNumbers array is : ",
  EvenNumbers.every((number) => {
    return number % 2 != 0;
  })
);
console.log(
  "The value returned by the every() function when the condition to check if a number is even is given to the OddNumbers array is : ",
  OddNumbers.every((number) => {
    return number % 2 == 0;
  })
);
console.log(
  "The value returned by the every() function when the condition to check if a number is odd is given to the OddNumbers array is : ",
  OddNumbers.every((number) => {
    return number % 2 != 0;
  })
);

// Now we will see the some() method which also does the same task but it returns true even if a single element returns true through the callback function

console.log(
  "The result of the some() function when the condition to check if a number is even is give to the EvenNumbers array is : " +
    EvenNumbers.some((number) => {
      return number % 2 == 0;
    })
);
console.log(
  "The result of the some() function when the condition to check if a number is odd is give to the EvenNumbers array is : " +
    EvenNumbers.some((number) => {
      return number % 2 != 0;
    })
);
console.log(
  "The result of the some() function when the condition to check if a number is even is give to the EvenNumbers array is : " +
    OddNumbers.some((number) => {
      return number % 2 == 0;
    })
);
console.log(
  "The result of the some() function when the condition to check if a number is odd is give to the EvenNumbers array is : " +
    OddNumbers.some((number) => {
      return number % 2 != 0;
    })
);

// Now we will see the reduce() method that basically reduces the entire array to a single value based on some conditions specified in the callback function

let randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumOfArray = randomNumbers.reduce((result, number) => {
  return result + number;
});

console.log("Sum of the numbers in the randomNumbers array is : " + sumOfArray);

//Now we will see an application of the reduce() function to find the max number in a given array

let findMaxArray = [1, 5, 4, 2, 7, 8, 9, 5, 6, 7, 5, 4, 9, 11, 1, 5, 3];

let maxNumber = findMaxArray.reduce((max, number) => {
  return max > number ? max : number;
});

console.log("The largest number in ", findMaxArray, " is : ", maxNumber);

// Now we will see the spread function

// Spread function is used to expand arrays or strings [which are also character arrays] and pass them to functions

// For example, the Math.min() function returns the smallest values from teh numbers passed as arguments but if we have an array of say 1000 numbers then it becomes very difficult to pass each and every element into the min() function. In this case we can write the name of the array preceeded by three dots i.e. '...[arrayName] to do the same thing'

let findMinAndMaxNumbers = [
  1, 2, 6, 5, 8, 8, 5, 3, 5, 3, 5, 6, 3, 5, 55, 4, 7, 3, 6, 34,
];
let min = Math.min(...findMinAndMaxNumbers); //this is the syntax of the spread function (the three dots)
let max = Math.max(...findMinAndMaxNumbers);

console.log("The max number is the array is : ", max);
console.log("The min number in the array is : ", min);

// We can also use this spread concept to assign all the elements of an array into another array

let duplicateNumbers = [...findMinAndMaxNumbers]; //this is another way to copy an array using the spread concept

//  note that this is different from writing dulicateNumbers = findMinAndMaxNumbers as if we write this then both of them will be exactly the same and any changes done to any one will also be reflected in the other one but this is not the case when we use the spread as this only makes a copy of all the numbers present in the orignal array and fills them in the new one.

// We can also convert a string into a character array using the spread concept as shown below

let string = "My name is P Rishabh Kumar and I love coding very very much....";
let sstring_character_array = [...string]; //this converts the above string into an array of characters and now we can play with every single character of the string

// If we have more than one array whose elements we want to copy in a new array , we can also do that by spereading every single array one by one separated but commas

let tryNumberOdd = [1, 3, 5, 7, 9];
let tryNumberEven = [2, 4, 6, 8, 10];

let tryNumber = [...tryNumberOdd, ...tryNumberEven];

// The spread  function also works with object literals

const StudentData = {
  name: "P Rishabh Kumar",
  age: 20,
  cgpa: 9.32,
  RegNumber: "23BCE0957",
  email: "ThisIsADummyEmail_12345@gmail.com",
};

// Now if I want to copy the data of this object into another objects, we can use the spread concept

let duplicateStudent = { ...StudentData };

// This also helps us to merge two or more objects

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  c: 3,
  d: 4,
};

let merged_object = { ...obj1, ...obj2 };

// Now we will see the concept of REST

// REST is basically the exact opposite of the spread concept,
// REST allows you to take multiple parameters and consolidtaes them into a single array

// We can know that someone has used REST when we see a ...[someName] type of syntax in a function

function addNumbersOfArray(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  });
}

// Now whenever we use a function with parameters or even without parameters, there is a thing called 'parameters' that is a collection but it is not an array so tehrefore the array methods like map() reduce() some() etc will not work for the 'parameters'

// Next, we will see the concept of destructuring
// This basically means that we can assign some elements of an array to some varaibles

let names = [
  "P Rishabh Kumar",
  "Pratham Patil",
  "Rajvi Solnaki",
  "Vrushali",
  "Tithi Radia",
];

let [topper_rank1, topper_rank2, topper_rank3, ...others] = [
  names[1],
  names[2],
  ,
  names[4],
]; //the remaining names will be stored inside the other array using the concept of REST

// when we want to destructure objects, we will use curly braces instead of the square brackets

// whatever we want to search for in the object teh same name is given to the varaible in which teh value is going to be stored

let RishabhKumar = {
  name: "P Rishabh Kumar",
  age: 20,
  cgpa: 9.32,
  username: "Rishi@123",
  password: "ABCD@1234",
  reg_number: "23BCE0957",
};

let { username, password, reg_number } = RishabhKumar; //this will search for the keys, username, password and reg_number in teh objects, fetch the info and store it in the respective variables

// However if we want the value of a particular key to be stored in a varaible whose name is not the same as that of the key, the we will have to use the following syntax :

let {
  username: new_user,
  password: new_pass,
  reg_number: new_reg_number,
} = RishabhKumar; //this will feetch the value for the key 'username' and store it in the variable new_user and so on for other varables as well

// Now comes the real part i.e. DOM and integrating HTML, CSS with JS

// DOM stands for Document Object Model

//Whenever we write any HTML, CSS code, and when we link that code to JS, it generate an object tree for JS, i.e. each and every or each and every element will be treated as a n object and becomes a node in the tree and the tree is constrcuted in the order of occurence of the elements . For example, if we have a div wich has an unordered list of 3 elements, then the root node will be the document object, then we will have the head title body and all those things, finally for the main tags, we will have div as the parent and ul as the child which in turn will have 3 children in the form of the 'li' tags
