
let array = [3, 2 ,1, 2];

function sum (arrayArg) { 
    let totalSum = 0;

    for (let value of arrayArg) {
    
        if (typeof value === "number"){ 
            totalSum += value;
        
        }
        
    
    }
    return totalSum;
}

    console.log(sum(array));


   // let array = [3, 2 ,1, 2];

// function sum2 (arrayArg) { 


// for (let value of arrayArg) {
//     let totalSum = 0;
//     if (typeof value === "number"){ 
//         totalSum += value;
//         console.log(totalSum);
        
      
//     }
//     return totalSum;
//     }
// }

//     sum2 (array);