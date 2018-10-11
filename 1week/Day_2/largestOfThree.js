// take arguments from terminal
const  args = process.argv.slice(2);
let num = [];
let biggestNum = 0;

//turn args into numbers
let num1 = parseInt(args[0]);
let num2 = parseInt(args[1]);
let num3 = parseInt(args[2]);

for (let i= 0; i <= args.length-1; i+=1) {

console.log(parseInt(args[i])); 

num[i] = parseInt(args[i]);

console.log("this is nums " + num[i]);

if (num[i] > biggestNum) { 
    biggestNum = num[i]; 
    console.log("first numb is bigger than next one, which is  "+ biggestNum); 
} else { 
    // biggestNum = num[i+1]; 
    // console.log("number hasn't gotten bigger " + biggestNum); 
}

}

console.log("this is biggest number " + biggestNum);

