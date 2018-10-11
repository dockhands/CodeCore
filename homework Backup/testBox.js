



const  args = process.argv.slice(2);

//turn args into numbers, to find the length of array
let numRows = parseInt(args.length);
console.log ("this is how many arguments : " + numRows)


function boxit (array) { 

    
for ( let i = 0; i <= numRows; i++) { 
    let num = " ";
  for (let j = 1; j <= array.length + 2; j++) {

    num = num + "-";
    
  }
  drawTopBorder(4)
  console.log("| " + array[i]+ " |");

    //console.log (" # "\n" # " *2 );
    console.log(num);
}

}

boxit(args);






// node testBox.js 'Jon Snow' 'Cersei Lannister' 'Daenerys Targaryen'