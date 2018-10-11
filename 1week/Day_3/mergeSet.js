

array1 = [1, 2, 3, 4, 5, 6];
array2 = [2, 3, 4, 5, 6, 7,8];
arrayNew = [];

function mergeSet (arg1,arg2) { 

arrayNew = array1.concat(array2);
console.log("values of new merged array: ");
console.log(arrayNew);

    for(let val of arg1) {
        console.log("values of array1: " + val);

       // if array 2 includes any values from array 1, then...
        if (arg2.includes(val)) {
            // push (add) that value to the new array
            console.log("yes we found duplicates " + val);
            
            arrayNew.splice(val,1);
            console.log("values of new array: " + arrayNew);
        }

    }
    return arrayNew;
}

console.log(mergeSet(array1,array2));
