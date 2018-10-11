// const find = (arr, fn) => { 

//     for (let i = 0; i <arr.length; i+=1) {
    
//         const even = function (arr[i]) { return arr[i] % 2 === 0 };
        
//     return newArry;
//     } 
// }

// [1,2,3,4], even
//  f,t,f,t
// find(arr, cb) {
//     arr.forEach(element => {
//         cb(element)
//     })
// }

const find = (arr, cb) => {
    for (let element of arr) {
        if (cb(element)) return element
    };    
}


// given three functions:
// even returns true if its argument, n, is an even number (false otherwise)
const even = function (n) { return n % 2 === 0 };
// even returns true if its argument, n, is an odd number (false otherwise)
const odd = function (n) { return !even(n) };

// creates a function that returns true if its argument is above min
const above = function (min) {
  return function (n) {
    return n > min;
  }
}

let arr = [1,2,3,4,5,6];

console.log(find(arr, even)); // returns 2
console.log(find(arr, odd)); // returns 1
console.log(find(arr, above(3))); // returns 4

// find(
//   arr,
//   function (value, index, arr) { return value % 5 === 0 }
// ) // returns 5 (or, the first multiple of 5)


//map(repeat, ["a", 'b', 'c', 'd']);
// Write an higher-order function, find, from scratch that takes two arguments:

// the first is an array
// the second is a callback that will be called once for every element in the array with 3 arguments:
// the current value of the element
// the current index of the element
// the array itself
// find returns the first element in the array for which the callback (or, second argument) returns true.