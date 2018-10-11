
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let array4 = ['firstName', 'lastName'];
let array5 = ['Jon', 'Snow'];

function zip(arrA, arrB) {

    if (!arrA.length === arrB.length) {
        return null;
    } else { 
        let newArray = [];
        for (var i = 0; i < arrA.length; i++) {
        newArray.push([arrA[i], arrB[i]]);
            
         }
        
        return newArray;
    }

}

// returns  [[1, 4], [2, 5], [3, 6]]
console.log(zip(array1, array2));

 
 console.log(zip(array4, array5));
 
// returns [['firstName', 'Jon'], ['lastName', 'Snow']]


// Next Module
// Write a function, zip, that takes two arrays of the same length, 
// arrA & arrB. If arrA and arrB are not the same length, 
// the function should return null. Otherwise, it should combine both arrays 
// together in a two-dimensional array:

// zip([1, 2, 3], [4, 5, 6]) // returns  [[1, 4], [2, 5], [3, 6]]
// zip(['firstName', 'lastName'], ['Jon', 'Snow']) 
// // returns [['firstName', 'Jon'], ['lastName', 'Snow']]
