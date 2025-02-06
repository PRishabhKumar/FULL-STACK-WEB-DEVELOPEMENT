// let add = (number1, number2) => number1 + number2;
// let subtract = (number1, number2) =>
//   number1 > number2 ? number1 - number2 : number2 - number1;
// let multiply = (number1, number2) => number1 * number2;
// let divide = (number1, number2) => number1 / number2;
// let remainder = (number1, number2) => number1 % number2;
// let g = 9.8;
// let PI = 3.1415;

// Noe we have three mathods to use the module.exports object

// 1) Merging all reuiqred information into a spearate object and exporting that object

// let info = {
//   sum: add,
//   difference: subtract,
//   product: multiply,
//   quotient: divide,
//   remainder: remainder,
//   g: g,
//   PI: PI,
// };

// module.exports = info;

// 2) We can define the informaiton using the module.exports object itself

// module.exports = {
//   sum: add,
//   difference: subtract,
//   product: multiply,
//   quotient: divide,
//   remainder: remainder,
//   g: g,
//   PI: PI,
// };

// 3) We can add the module.exports line before each and every function or variable declaration that we need to export

// module.exports.sum = (number1, number2) => number1 + number2;
// module.exports.difference = (number1, number2) =>
//   number1 > number2 ? number1 - number2 : number2 - number1;
// module.exports.product = (number1, number2) => number1 * number2;
// module.exports.quotient = (number1, number2) => number1 / number2;
// module.exports.remainder = (number1, number2) => number1 % number2;
// module.exports.g = 9.8;
// module.exports.PI = 3.1415;


// Now we will se how we can export content from other folders/directories and use them in some other folder

