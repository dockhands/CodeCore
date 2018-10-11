
function linearSearch (array,num) { 

    if (!array.includes(num)) { 
        console.log("can't find");
        return -1;
    } else { 
        console.log("we found " + num + "in the array")
        return array.indexOf(num);
    }


}

console.log(linearSearch([ 3, 5, 7, 8, 10, 12 ], 10)); 

function binarySearch (array, num) { 
   
   
    console.log("===========");
    console.log("we're searching for " + num);
    console.log("this is the array length  " + array.length);

if (array.length === 1) { 
    console.log("got to the end");
    console.log(array.indexOf(num));
    return array.indexOf(num);
}

   else if (array.includes(num)) {
        console.log("check arrayFirst = " + array);
        array= array.slice(0,array.length/2);
        console.log("check arrayFirst = " + array);

        console.log("yup found it in first half")
        binarySearch (array,num);
     
    }

    
}

console.log(binarySearch([ 3, 5, 7, 8, 10, 12, 90, 100, 120, ], 5)); 

// let array2 = [1, 2, 3, 4, 5, 6, 7 , 8, 9];
// console.log(array2.slice(0,array2.length/2));




// linearSearchlinearSearch([([  33,,  55,,  77,,  88,,  1010,,  1212  ],],  1010))  // 4// 4
// linearSearchlinearSearch([([  33,,  55,,  77,,  88,,  1010,,  1212  ],],  33))  // 0// 0
// linearSearchlinearSearch([([  33,,  55,,  77,,  88,,  1010,,  1212  ],],  7878))  // -1// -1
// linearSearchlinearSearch([([  88,,  33,,  66,,  11,,  22,,  66  ],],  66))  // 2// 2