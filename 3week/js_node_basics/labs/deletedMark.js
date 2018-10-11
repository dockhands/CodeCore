// Write a script, deleteMarked.js, that reads lines from a CSV file taken as an argument. It should copy lines from the read file ignoring lines where the third column equals yes into a new file. The name of the new file should be taken as an argument as well.

const fs = require("fs");

const args = process.argv.slice(2);

const inputFile = args[0];
const outputFile = args[1];

console.log(inputFile);
console.log(outputFile);


let newLines = [];

fs.readFile(inputFile, (err, data) => {
    if (err) {
        console.log(`can't read file ${err}`);
    } else {
        const lines = data.toString().split('\n');
        //const linesWithNumbers = [];
        console.log(lines);

        for (i = 0; i < lines.length; i++) {

            if (lines[i].includes("yes")) {

                console.log("found yes inside" + lines[i]);
                lines.splice(i, 1);

            }
            else {
                console.log("did not find yes in " + lines[i]);
            }
        }
        var newLines = lines.join('\n');
        console.log("did splice work?" + newLines);
    }
    fs.writeFile(outputFile, newLines, (err) => {
        if(err) {
          console.log(`could not write to a file ${err}`);
        }
      });
});




 