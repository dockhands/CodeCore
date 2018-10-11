

array1 = [1, 2, 3, 4, 5];
array2 = [3, 4, 5, 6];
arrayNew = [];

function matchingSet (arg1,arg2) { 

    for(let val of arg1) {
        console.log("values of array1: " + val);
     
        console.log(arg2.includes(val));
       // if array 2 includes any values from array 1, then...
        if (arg2.includes(val)) {
            // push (add) that value to the new array
            arrayNew.push(val);
            console.log("values of new array: " + arrayNew);
        }


    }

}

matchingSet(array1,array2);



// matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7]) // returns [3, 4]
// matchingSet(['j', 'a', 'n', 'e'], ['j', 'o', 'h', 'n', 'n', 'y']) // returns ['j', 'n']