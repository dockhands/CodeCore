

// Next Module
// Create a script, thinkingOf.js, that plays the "I'm thinking of a number between X and Y" game with the user. When the user runs the script, it should tell them that it's thinking of a number between a number and another, then the user types a number to attempt a guess. The user should have as many attempts as they need. When they guess it correctly, the script should indicate that the user won and it should also log how many attempts it took.

let firstQuestion = "I'm thinking of a number between 1 and 10...";
let secondQuestion = "Nope, nope nope. Guess again!";
const readLine = require("readline");
// takes in an object
const interface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout

});
let counter = 0;
const repeatQuestion = (q) => {

    interface.question(q, (guess) => {

        console.log("inside second guess");
        let guessNumber = parseInt(guess);
        let hiddenNumber = 9;
        if (guessNumber !== hiddenNumber) {
            console.log("you gussed it wrong!")
            counter += 1;
            repeatQuestion(secondQuestion);
        }
        else {
            console.log(`You gussed it right, in ${counter} many times!`);
            console.log(counter);
            process.exit();
        }
    });
}

repeatQuestion(firstQuestion);
// interface.question(openQuestion, (guess) => {
//     counter = 0;
//     let guessNumber = parseInt(guess);
//     let hiddenNumber = 9;
//     if (guessNumber !== hiddenNumber) {
//         console.log("you gussed it wrong!")
//         counter += 0;
//         repeatQuestion();
//         //console.log("called repeaat function")
//     }
//     else {
//         console.log("you gussed it right!")
//     }
//     // console.log(`this is the guess number ${guessNumber}`);
//     // console.log(`this is the hidden number ${hiddenNumber}`);
//     process.exit();
// });



