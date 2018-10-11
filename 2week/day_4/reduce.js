
const reduce = (arr, cb, startValue) => { 

    let currentValue = startValue; 
    
    for (let i = 0; i < arr.length; i++)  {
    currentValue = cb(currentValue, arr[i], i); 

        // const plus = (a, b) => a + b;
        // let arr = [1, 2, 3, 4, 5];

    }; 


return currentValue; 
}


// const filter = (arr, cb) => {
   
//     const newArray = [];
//      for (let i = 0; i < arr.length; i++)  {
//          if (cb(arr[i], i, arr)) newArray.push(arr[i]);
//      };    
//      return newArray;
//  }
 


const plus = (a, b) => a + b;
let arr = [1, 2, 3, 4, 5];

console.log(reduce(arr, plus, 0)); // returns 15
console.log(reduce(arr, (a, b) => a * b, 1)); // returns 120

// Next Module
// Write an higher-order function, reduce, from scratch that takes three arguments:

// the first is an array
// the second is a callback that will be called with 3 arguments:
// the result of the previous callback call (or the initial value for the first one)
// the current value of the array
// the current index of the array
// an initial value
// reduce example: