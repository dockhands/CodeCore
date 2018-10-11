

// `process` is a global variable available
// inside Node programs. It contains information
// about the program.
const args = process.argv.slice(2);

// `process.argv` returns an array where
// the first value is the full path to
// your Node program and the second value
// is the full path to script that
// was run. All other values are arguments
// that you gave the script.

// Example:
// `node scriptWithArgs.js firstArg secondArg`
//                         ð       ð
//                         3rd val. 4th val.


const firstArg = args[0];
const secondArg = args[1];

console.log(args);
console.log("First argument:", firstArg);
console.log("Second argument:", secondArg);
console.log("Third argument:", args[2]);
//shift alt down, copies line