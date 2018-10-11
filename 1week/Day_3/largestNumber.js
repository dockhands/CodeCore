
function largestNumber(arrayParam) { 

let bigNum = arrayParam[0]; 
    for (let value of arrayParam) {

        if (value > bigNum) { 

            bigNum = value; 
        }
    
    }
    return bigNum;

}

console.log(largestNumber([-40, -2, -13, -34, -42, -8]));
console.log(largestNumber([40, -2, 13, 34, -42, 8]));

// Next Module
// Write a function called largestNumber that returns the largest number
// from an array of numbers.

// Example:

// largestNumber([40, 2, 13, 34, 42]) // returns 42
// largestNumber([1, 2, 3, 4, 5, 6]) // returns 6
// largestNumber([99, 77, 55, 33, 22, 11]) // returns 99