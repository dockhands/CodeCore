const readLine = require("readline");
const addLines = require('./addLineNumbers');
const fs = require("fs");


// takes in an object
const interface = readLine.createInterface ( { 

input: process.stdin,
output: process.stdout

}); 


interface.question('What is the file path?', (filePath) => {
   //console.log(`this is the file path ${filePath}`);
    fs.readFile(filePath, (err, data) => {
      if (err) throw err;
      console.log(addLines(data));
      process.exit();
    });
  });