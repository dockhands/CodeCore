
let arrayTest = ["bob", "Jon Snow", "Cersei Lannister"];
let arrayTest2 = ["Cersei Lannister"];
const  args = process.argv.slice(2);

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
    } else if (array.length === 2){ 
    
        console.log(drawTopLine(charWidth) + "\n");
        for (let i = 0; i < array.length; i++) {
           
            
            console.log(drawsAround (array[i]));
            console.log(drawsAround (array[i]));
            
          }
        console.log(drawBottomLine(charWidth));
    
        }// end 2 cases 
    
        else { 
    
            console.log(drawTopLine(charWidth) + "\n");
            for (let i = 0; i < array.length; i++) {
               
                console.log(drawsAround (array[i]));
                console.log(drawMidLine(charWidth)+ "\n");
                
              }
            console.log(drawBottomLine(charWidth));
        
            }// end 2 cases 
    
       
    
    } // end of boxit function 
    



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



function drawsAround (string) { 

    nameLength =  string.length;
    addBlanks = longestName.length - nameLength;
    return "┃" + string + ' '.repeat(addBlanks) + " ┃";

}


findMaxCharLength (arrayTest);

boxIt(arrayTest);

boxIt(arrayTest2);

boxIt(args);
