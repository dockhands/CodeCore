
let array1 = [2, 2, 3, 4, 9, 9];

function findDuplicates(values) { 
   

    for (var i = 0; i < values.length; i++) {
    console.log(i);
// search for a value, starting at the next position over
// e.g. look for 1, at position 1
// which is true 
// returns -1 if item isn't found 

    let posDup = values.indexOf(values[i], i+1);
    console.log("-1 means we did NOT find duplicate " + posDup);
    console.log("this is value we are looking for" + values[i]);
if ( posDup < 0 )  {

    console.log("Didn't find a duplicate" + posDup);
}
else { 

values.splice(values[i], 1); 
  console.log("trimmed down array skinny" + values[i]);

    
}

}
return values;
}

console.log(findDuplicates(array1));

// Next Module
// Write a function, findDuplicates, that takes an array of strings and/or integers, values. Return a new array containing all the values are duplicated in the array.

// Example:

// findDuplicates([1, 1, 3, 4, 5, 6, 7, 8, 9, 9]) // returns [1, 9]
// findDuplicates(['Bob', 'bob', 'Rob', 'Rob', 1, 2, 3, 4, 4]) // returns ['Rob', 4]