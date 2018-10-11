// take arguments from terminal
const  args = process.argv.slice(2);

//turn args into numbers
let num1 = parseInt(args[0]);
let num2 = parseInt(args[1]);

for (let i = 1; i <= 100; i++) {

//console.log(i);

if (( i % num1 === 0) && (i % num2 === 0)) {
    console.log("fizzbuzz");
}
else if (i % num1 === 0) {
    console.log("fizz");
    //i = "fizz";
} else if (i % num2 === 0) {
    console.log("buzz");
} 

else  { 
    console.log(i);
}

}

// Write a script fizzBuzz.js that takes two numbers, 
// then iterates through the numbers from 1 to 100 logging "fizz" 
// if the current number is divisible by the first number, "buzz" 
// if the current number is divisible by the second number, 
// "fizzbuzz" if it's divisible by both, else print the current number.

