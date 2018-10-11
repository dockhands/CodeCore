
randomArray = [];

valuesArray = [["dog", "peach", 4], ["pea"]]
valuesNotArray = ["cat", "dog"]
emptyArray = []; 
console.log(emptyArray);
console.log(typeof emptyArray);

function areValuesArray(arrayParam) { 

    if (arrayParam.length === 0) {
        console.log("empty array!")
    }

    for (let value of arrayParam) {

        if (!Array.isArray(value)){ 
        return false;
        } 
       
    
    }
    return true;

}

console.log(areValuesArray([[3,2], [3,4], [2]]));

console.log(areValuesArray([1, [3,2], [3,4], [2]]));

console.log(areValuesArray(valuesArray));

console.log(areValuesArray(valuesNotArray));

console.log(areValuesArray(emptyArray));

//Array.isArray([1, 2, 3])