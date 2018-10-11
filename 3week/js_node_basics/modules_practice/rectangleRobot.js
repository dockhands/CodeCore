let rectMaker = require("./widthByHeight.js");

const readLine = require("readline");


// takes in an object
const interface = readLine.createInterface ( { 

input: process.stdin,
output: process.stdout

}); 

interface.question('beep bob, please give me a dimensions', (answer) => { 
console.log(`Eww! I don't like ${answer}`);
process.exit();
});