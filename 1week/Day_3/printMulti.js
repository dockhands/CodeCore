
const myArray = [[2,3,4], ["Hello CodeCore", 1, true]];


function printMulti (doubleArray) { 

    //go through the first Array (outside array) 
    for (let outsideArray of doubleArray) {

        //and for the first Array, first go through all of it's elements 
        for (let insideArray  of outsideArray) {

            console.log(insideArray);

        } 
       // console.log(outsideArray);

    } 

}

printMulti(myArray);

// Write a function called printMulti that takes an array of arrays, such as:

// const myArray = [[2,3,4], ["Hello CodeCore", 1, true]];
// and logs every element to the console as follows:

// > printMulti(myArray)
// 2
// 3
// 4
// Hello CodeCore
// 1
// true