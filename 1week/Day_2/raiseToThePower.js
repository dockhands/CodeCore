// take arguments from terminal
const  args = process.argv.slice(2);

//turn args into numbers
let num1 = parseInt(args[0]);
let num2 = parseInt(args[1]);

let result = num1**num2;
console.log(result);

// Write a script raiseToThePower.js that takes two numbers as arguments, 
// then calculate the first number raised to the power of the second number 
// and log it to the screen.

