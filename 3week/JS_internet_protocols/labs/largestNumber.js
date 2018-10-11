
let data ={
    "1": 5,
    "2": 7,
    "3": 1,
    "4": 3,
    "5": 8,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10": 0,
    "11": 0,
    "12": 0
  };

   //console.log(data)

function largestNumber (string) { 

    numberArray = Object.values(string); 
    console.log(numberArray);
      // expected output: Array ["somestring", 42, false]
      
   
    console.log("number string from oboject: " + numberArray);
    console.log("number string is datatype " + typeof numberArray);     
    
    // stringArray = string.split(",");
    // let numberArray = stringArray.map(Number);
   
    let bigNum = numberArray[0]; 
    for (let value of numberArray) { 

        if (value > bigNum) { 
    
            bigNum = value; 
        }
    }
    return bigNum;
    };

 console.log("larget number is: " + largestNumber(data));