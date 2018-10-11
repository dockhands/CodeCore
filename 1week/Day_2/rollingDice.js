
// take arguments from terminal
const  args = process.argv.slice(2);

//turn args into numbers
let numDice = parseInt(args[0]); // represents quantity of dice 
let numFaces = parseInt(args[1]); // represents numbers of faces 

let numberOfDice = []; 
numberOfDice = numDice;
console.log("this is the number of dice in the array: " + numberOfDice);

let numberOfFaces = []; 
numberOfFaces = numFaces;
console.log("this is the number of faces in each dice in the array: " + numberOfFaces);

//console.log("test");

//console.log("this is num of faces: " + numberOfFaces);
//console.log("is numb : " + typeof numberOfFaces);

let totalRoll = 0;
let avgRoll = 0;

for (let i = 1; i <= numberOfDice; i++) {
    
    let roll = Math.floor((Math.random() * numberOfFaces) + 1);

    console.log( "Rolled: " + roll);

    totalRoll += roll;
    

  
}
console.log( "--------------");
avgRoll = (totalRoll / numberOfDice);
console.log("Average Roll: " + avgRoll);
console.log( "Total: " + totalRoll);






// Write a script rollingDice.js that takes two numbers as arguments. 
// The first one represents a quantity of dice and the second one represents a number of faces.
// Simulate rolling the dice. 
// Log the result of each dice, the sum and the average of all rolls.

// $ node rollingDice.js 3 6
// Rolled: 2
// Rolled: 1
// Rolled: 3
// -----------------------------
// Average Roll: 2
// Total: 6
