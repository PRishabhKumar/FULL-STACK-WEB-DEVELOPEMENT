// let args = process.argv;
// for (let i = 2; i < args.length; i++) {
//   console.log("Hello how are you " + args[i] + " . Nice to meet you !!!");
// }

// we are starting with the index 2 as we dont want the first 2 paths which are default arguments of the process object

// MODULE EXPORTS SECTION BEGINS HERE

let info = require("./math");

let a = 10;
let b = 5;

let sum = info.sum(a, b);
let diff = info.difference(a, b);
let prod = info.product(a, b);
let quotient = info.quotient(a, b);
let remainder = info.remainder(a, b);

console.log(`${a}+${b} = ${sum}`);
console.log(`${a}-${b} = ${diff}`);
console.log(`${a}*${b} = ${prod}`);
console.log(`${a}/${b} = ${quotient}`);
console.log(`${a}%${b} = ${remainder}`);
