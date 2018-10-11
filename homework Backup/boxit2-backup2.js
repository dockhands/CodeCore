
let arrayTest = ["bob", "tim", "Jon Snow", "Cersei Lannister"];
let arrayTest2 = ["Cersei Lannister"];



function drawLine (num) { 
    
    let line = " ";
    for (let i = 0; i <= num; i++) { 
        line = line + "━";
    
   
    }
    return line; 
    }

console.log(drawLine(10));


function drawTopLine (num) { 
    
    let line = "┏";
    for (let i = 0; i <= num; i++) { 
        line = line + "━";
    
   
    }
    return line + "┓"; 
    }

console.log(drawTopLine(10));

function drawMidLine (num) { 
    
    let line = "┣";
    for (let i = 0; i <= num; i++) { 
        line = line + "━";
    
   
    }
    return line + "┫"; 
    }

console.log(drawMidLine(10));


function drawBottomLine (num) { 
    
    let line = "┗";
    for (let i = 0; i <= num; i++) { 
        line = line + "━";
    
   
    }
    return line + "┛"; 
    }

console.log(drawBottomLine(10));


function drawsAround (string) { 

    return "┃" + string + " ┃";
}

console.log (drawsAround ("daniel Hawkins"));




function findMaxCharLength (array) { 
   
    let longestString = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestString.length) { 
    
            longestString = array[i];
            console.log(longestString);
        
        }
        
    
    }
    return longestString;
}


function boxIt (array) { 

// first, lets find the longest string length in the array 
longestName = findMaxCharLength(array);
console.log("this is the longest name ")
console.log(longestName);

charWidth = longestName.length;

if (array.length === 1) { 


    console.log(drawTopLine(charWidth) + "\n");
    console.log(drawsAround (array[0]));
    console.log(drawBottomLine(charWidth));
} else { 

    
    for (let name in array) {
       
        console.log(drawTopLine(charWidth) + "\n");
        
      }
      


    console.log(drawTopLine(charWidth) + "\n");
    console.log(drawsAround (array[0]));
    console.log(drawMidLine(charWidth)+ "\n");
    console.log(drawsAround (array[1]));
    console.log(drawBottomLine(charWidth));

}

} // end of boxit function 




findMaxCharLength (arrayTest);


boxIt(arrayTest);

boxIt(arrayTest2);

