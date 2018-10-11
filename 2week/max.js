//maximum([ 213, 12, 66, 999 ]); # should return 999

let arrayNum = [ 21, 12, 74, 99, 90, -3, 80 ]; 

let arrayNum2 = [ 21, 112, 333, 959, 12, 1290, 1209, 43904, 2923, 232313, 2390 ]; 

let bigNum = arrayNum[0]; 

function maxIteration (array) {

    for (let i = 0; i<= array.length-1; i++ ){ 
        
    if (array[i] > bigNum) { 
    
        bigNum = array[i];
    } 

    }
    return bigNum;
} 

console.log("this is the big number using Iteration, dude");
console.log(maxIteration(arrayNum));



function maxRecursion (array, currentMax) { 
    
    
    if(array.length === 1) {
        return array[0];
    } 

    else if (array[0] > array[1]) { 
     console.log(" ind0 >  ind1, this is current max " + array[0]);
     arrray = array.pop();
     return maxRecursion(array,array[0]);
    }
    else if (array[0] < array[1]) { 
        
        console.log(" ind1 > ind0, this is current max " + array[1]);
        array = array.slice(1);
        return maxRecursion(array,array[0]);

    }
    else { 
        console.log("you've got aproblm");
        return array[0];
    }

    


}

console.log(maxRecursion(arrayNum2, arrayNum2[0]));