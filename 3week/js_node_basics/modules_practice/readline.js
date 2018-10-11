const readLine = require("readline");


// takes in an object
const interface = readLine.createInterface ( { 

input: process.stdin,
output: process.stdout

}); 

interface.question('what is the file path', (filePath) => { 
console.log(`this is the file path ${filePath}`);
process.exit();
});