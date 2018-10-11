
const partition = (arr, cb) => {
   
    const trueArray = [];
    const falseArray = [];
     for (let i = 0; i < arr.length; i++)  {
         if (cb(arr[i], i, arr)) { 
            trueArray.push(arr[i]);
         } else { 
            falseArray.push(arr[i]);
         }
     };    
     return [trueArray, falseArray];
 }
         


const arr = [1, 2, 3, 4, 5, 6, 7, 8 ];

const arr2 = ["dog", 2, 3, "tuna", 5, 63, 7, 8 ];

//const partitioner = function (n) { return n % 2 === 0 };

console.log(partition(arr, val => val > 4)); // returns [ [ 5, 6, 7, 8 ], [ 1, 2, 3, 4 ] ]
console.log(partition(arr, val => val % 2 === 0)); // returns [ [ 2, 4, 6, 8 ], [ 1, 3, 5, 7 ] ]

console.log(partition(arr2, val => val === "tuna"));