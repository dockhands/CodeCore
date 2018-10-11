// JS: Higher-Order Functions

// Arrow Functions

// Exercise: To Arrow

// function add(a, b) {
//   return a + b;
// }

// const add = (a, b) => {
//   return a + b;
// };

const add = (a, b) => a + b;

// function flip(fn) {
//   return function(a, b) {
//     return fn(b, a);
//   };
// }

// const flip = fn =>
//   function(a, b) {
//     return fn(b, a);
//   };

const flip = fn => (a, b) => fn(b, a);

// function V(x) {
//   return function(y) {
//     return function(z) {
//       return z(x)(y);
//     };
//   };
// }

const V = x => y => z => z(x)(y);

// Arrow functions can't be used as a constructor.
// They do not have a `prototype` property.

V.prototype === undefined; // true

// Arrow functions' `this` works differently. It can't be changed.
// It's determined at the time the function is created
// instead of at the time the function is used.
// It will always be the `this` of the surrounding
// block of code.

const myArrow = () => this;
const myFunc = function() {
  return this;
};

console.log("myFunc:", myFunc());
console.log("myArrow:", myArrow());

const myObject = {
  myProp: "A property value",
  myArrow: myArrow,
  myFunc: myFunc,
  myInlineArrow: () => this,
  myMethod() {
    const myFunc = function() {
      return this;
    };
    const myArrow = () => this;

    console.log("--- Inside myObject.myMethod() ---");
    console.log("myFunc:", myFunc());
    console.log("myArrow:", myArrow());
  }
};

console.log("myObject.myFunc():", myObject.myFunc());
console.log("myObject.myArrow():", myObject.myArrow());
console.log("myObject.myInlineArrow():", myObject.myInlineArrow());
myObject.myMethod();

// Higher-Order Functions

// Demo: Loud Function
// Exercise: Custom Logger

const five = () => 5;

const loud = (logFn, fn, ...args) => {
  logFn(`Calling ${fn.name}`);
  const value = fn(...args);
  // The above translates to the code below
  // const value = fn(args[0], args[1], args[2], args[3], ...);
  logFn(`Called ${fn.name} & returned ${value}`);
  return value;
};

// Example:

loud(console.log, five);
loud(console.warn, add, 5, 10);

// Use gather (i.e. ...) to get any number of arguments from
// from function as values in an array.
const allArgs = (...myArgs) => myArgs;
allArgs(9, 10, 11, 12); // (4)Â [9, 10, 11, 12]
allArgs(9, 10, 11, "dasdsa", {}); // (5)Â [9, 10, 11, "dasdsa", {â¦}]
allArgs(); // []

// To do the reverse, that is pass values of array as arguments
// to a function use the same symbol `...`. This is called spread.
Math.max(...[1, 2, 3]); // 3
Math.max(...[1, 2, 3, ...[5, 6, 7]]); // 7


/// Demo: High-order function: Each

// const each = (fn, arr) => { 

//     for (let val of arr) {
//         fn(val);
//     }

//     for (let i = 0; i <arr.length; i+=1) {
//         fn(arr)
//     }
// }


const repeat = (str,n) => { 
    return str.repeat(n);
}
 
const map = (fn, arr) => { 

    const newArr = [];
    for (let i = 0; i <arr.length; i+=1) {
    newArr.push(fn(arr[i], i));
        
    return newArry;
    } 
}

//map(repeat, ["a", 'b', 'c', 'd']);

