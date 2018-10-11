
// take arguments from terminal
const  args = process.argv.slice(2);

//turn args into numbers
let numRows = parseInt(args.length); // represents quantity of dice 

console.log ("this is how many arguments : " + numRows)

for ( let i = 0; i <= numRows; i++) { 
    let num = " ";
  for (let j = 1; j <= i; j++) {

    num = num + "#";
  }
console.log(num)
    //console.log (" # "\n" # " *2 );
}



// Write a script pyramid.js that takes a number as an argument then logs a 
//pyramid of # with that many number of rows.

// Example usage:

// $ node pyramid.js 4
//    #
//   # #
//  # # #
// # # # #


// \n   #
// \n  # #
// \n # # #
// \n# # # #
// 