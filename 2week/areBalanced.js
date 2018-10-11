
arg1 = "(1 + (2 * 8) ** (3 + 4))"; // true
arg2 = "(4 + 4 + (6 * 9)"; //false 
arg3 = "function rob (arg) { return (arg }"; //false
arg4 = "hello )"; //false
arg5 = ")("; //false

//console.log(arg2);

function areBalanced(arg) { 
    let charArray = arg.split("");
    console.log(charArray);
    let openCounter = 0; 
    let closedCounter = 0;
    
    for (let i = 0; i<= charArray.length-1; i++ ) {
        console.log(charArray[i]);

        if (charArray[i] === "(") { 
            openCounter = openCounter + 1; 
            

        } else if (charArray[i] === ")") { 
            closedCounter = closedCounter + 1; 
            

        }
    
    }
    console.log("This is the total of (,  " +  openCounter)
        console.log("This is the total of (,  " +  closedCounter)

    if (openCounter === closedCounter) { 
        console.log("should return true");
        return true;

      } else { 
          return false }


}

console.log(areBalanced(arg1));
console.log(areBalanced(arg2));
console.log(areBalanced(arg3));



// Next Module
// Create a function areBalanced that takes a string containing opening and closing parenthesis. It should return true if all opening parenthesis are properly closed; otherwise, return false. This problem can be solved in a straightforward manner using a stack data structure.

// Example usage:

// areBalanced("(1 + (2 * 8) ** (3 + 4))") // returns true
// areBalanced("(4 + 4 + (6 * 9)") // returns false
// areBalanced("function rob (arg) { return (arg }") // returns false
// areBalanced("hello )") // returns false
// areBalanced(")(") // returns false