
// take arguments from terminal
const  args = process.argv.slice(2);


//turn args into numbers
let side1 = parseInt(args[0]);
let side2 = parseInt(args[1]);
let side3 = parseInt(args[2]);

console.log(side2);

 const perim = side1 + side2 + side3;
 const area = Math.sqrt(perim*(perim-side1)*(perim-side2)*(perim-side3));

if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    console.log("impossible triangle!");
  } 
      
  else {

    console.log(`perimeter of triangle is : ${perim}`)
    console.log(`area of triangle is : ${area}`)

  }
