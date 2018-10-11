

const wait =  function (delay, dog) {
    
   setTimeout(alertFunc, delay);
  
    function alertFunc() {
        console.log("Hello!");
    }
    
    setTimeout(delay);
    console.log("waited for the delay " + delay);
    console.log("done waited!" + dog);
} 

const add = function (a, b) { return a + b};
// console.log(add(1,1)); // returns 2
// console.log(add(1,3)); // returns 4
// console.log(add(2,3)); // returns 5

wait(2000, 5);
// example wait usage
// const wait5add = wait(5000, add);
// console.log(wait5add(3,3)); // returns undefined
// console.log(wait5add(8,3)); // returns undefined (until 5s ends)
// console.log(wait5add(2,8)); // returns undefined (until 5s ends)
// console.log(wait5add(0,3)); // returns 3 (5s ended)
// console.log(wait5add(1,9)); // returns 10 (until 5s ends)

// // example until usage
// const until5add = until(5000, add);
// until5add(3,3) // returns 6
// until5add(8,3) // returns 12 (until 5s ends)
// until5add(2,8) // returns 10 (until 5s ends)
// until5add(0,3) // returns 10 (5s ended)
// until5add(1,5) // returns 10 (until 5s ends)