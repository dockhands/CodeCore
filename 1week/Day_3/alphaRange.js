
let alphabet = "abcdefghijklmnopqrstuvwyz";

let startLetter = "d";
let endLetter = "r";

function alphaRange (start, end){ 

console.log("this is the position of start letter " + alphabet.indexOf(start));

let beginChop = alphabet.indexOf(start);


console.log("this is the position of end letter " + alphabet.indexOf(end));

let endChop =  alphabet.indexOf(end);

console.log(alphabet.slice(beginChop,endChop)); 


}

alphaRange(startLetter, endLetter);




// Create a function, alphaRange, that takes two arguments: a start letter as a string and a end letter as a string. It should return an array beginning with the start letter, filled with all letters up to the end letter including end.

// Example:

// function alphaRange('a', 'f') // returns ['a', 'b', 'c', 'd', 'e', 'f']
// function alphaRange('d', 'h') // returns ['d', 'e', 'f', 'g', 'h']