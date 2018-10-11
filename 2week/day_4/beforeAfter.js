


const add = function (a, b) { return a + b};
console.log(add(1,1)); // returns 2
console.log(add(1,3)); // returns 4
console.log(add(2,3)); // returns 5

const after =  function (num, cb) {
    let counter = 0;
    console.log("value of counter: " + counter);
   

    return (a,b) => (counter ++ >= num? cb (a,b) : undefined);
} 

// after usage example
const addAfter3Tries = after(3, add);
console.log(addAfter3Tries(4,5)); // returns undefined
console.log(addAfter3Tries(4,2)); // returns undefined
console.log(addAfter3Tries(1,6)); // returns undefined
console.log(addAfter3Tries(5,5)); // returns 10 (add is only allowed to return now)
console.log(addAfter3Tries(1,5)); // returns 6

after(3);
after(3);
after(3);
after(3, add(1,2));

const before =  function (num, cb) {
    let counter = 0;
    console.log("value of counter: " + counter);
   

    return (a,b) => (counter ++ < num? cb (a,b) : undefined);
} 

// before usage example
const only3Times = before(3, add);
console.log(only3Times(4,5)); // returns 9
console.log(only3Times(4,2)); // returns 6
console.log(only3Times(1,6)); // returns 7
console.log(only3Times(5,5)); // returns undefined (no more calls to add allowed)
console.log(only3Times(9,9)); // returns undefined
















// let counter = 0
// function add() {
//     counter += 1;
//     // console.log(counter);
//     return () => counter > 3 ? counter : null;
// }



// const add = function (a, b) { return a + b};
// add(1,1) // returns 2
// add(1,3) // returns 4
// add(2,3) // returns 5

// // after usage example
// const addAfter3Tries = after(3, add);
// addAfter3Tries(4,5) // returns undefined
// addAfter3Tries(4,2) // returns undefined
// addAfter3Tries(1,6) // returns undefined
// addAfter3Tries(5,5) // returns 10 (add is only allowed to return now)
// addAfter3Tries(1,5) // returns 6

// // before usage example
// const only3Times = before(3, add);
// only3Times(4,5) // returns 9
// only3Times(4,2) // returns 6
// only3Times(1,6) // returns 7
// only3Times(5,5) // returns undefined (no more calls to add allowed)
// only3Times(9,9) // returns undefined