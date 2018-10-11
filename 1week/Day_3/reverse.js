
let fwdString = "Doggie";

function reverse (string) { 

let backString = "";

for ( i = string.length-1; i>=0; i--){ 

    backString += string[i];
    
}
return backString;
} 

console.log(reverse(fwdString));

// Write a function, reverse that takes in a string and 
// returns another string with the characters in reverse order.

// Is it possible to modify the string itself instead of returning
//  a copy of the original string? Why or why not?