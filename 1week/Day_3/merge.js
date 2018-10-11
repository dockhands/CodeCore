function merge(objA, objB) {

//make a new empty objc that will be merged
const objC = {};

// go through all the keys of Obj A 
for (let keys of Object.keys(objA)) { 
  
    objC[keys] = objA[keys];
    console.log("Obj C keys and values are now : ");
    console.log(objC);

}
// go through all the keys of Obj B 
for (let keys of Object.keys(objB)) { 
   
    console.log("Obj B keys and values are : ");
    console.log(objB);
    //assign a new value to all the keys of Obj C from objB, including updating existing
    objC[keys] = objB[keys];

}
console.log("Objc C keys and values are: ");
//console.log(objC);



return objC;

}

let obj1 = {firstName: "Dan", lastName: "Hawk", arms: 6};
let obj2 = {firstName: "Isaac", lastName: "King", teeth: 3, legs: 4, arms: 9}; 

console.log(merge(obj1, obj2));


// Write a function, merge, that takes two objects,objA & objB respectively 
//then returns a new object with all keys of objA & objB. 
//objA & objB should not be mutated when calling this function. 
//If objects objA & objB share keys, objB's key should take precedence over objA's.

// You can not use Object.assign.

// Example:

// merge({a: 1, b: 2}, {c: 3, d: 4}); // return {a: 1, b: 2, c: 3, d: 4}
// // with shared keys
// merge(
//   {firstName: 'Ron', lastName: 'Wesley', occupation: 'Wizard'},
//   {firstName: 'Harry', lastName: 'Potter'}
// ); // returns {firstName: 'Harry', lastName: 'Potter', occupation: 'Wizard'}


// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };
  
//   console.log(Object.keys(object1));
//   // expected output: Array ["a", "b", "c"]