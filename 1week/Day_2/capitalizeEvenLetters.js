// take arguments from terminal
const  args = process.argv.slice(2);

console.log(args);

let userInput = args[0]; // string 


let outPut = ""; // empty string
console.log(userInput);


for ( let i = 0; i <= userInput.length-1; i+=1) { 

if (i%2 === 1) {
outPut += userInput[i].toUpperCase();
console.log(outPut);

}
else { 
outPut += userInput[i].toLowerCase();
console.log(outPut);
}

console.log(outPut);
    

}

