
const fs = require("fs");

const args = process.argv.slice(2);
const size = args.map ( (item) => parseInt(item));

const width = size[0];
const height = size[1];
let myStar = "";

    for(let i = 0; i < width; i++) {
        for(let i = 0; i < height; i++) {

            myStar += "*"
        } 
        
        myStar += '\n';
        
    }
    console.log(myStar);

    const fileName = `${size[0]}_by_${size[1]}`;

    fs.writeFile(fileName, myStar, (err) => {
      if(err) {
        console.log(`Could not write file ${err}`);
      } else {
        console.log(`writing to file ${fileName} done!`);
      }
    })

// fs.writeFile("_by_.txt", box, (err) => {
//   if(err) {
//     console.log(`could not write to a file ${err}`);
//   }

  
//     for(let i = 0; i < height; i++) {
        
//         console.log("*".repeat(width));
//       }

// });





// fs.readFile(fileName, (err, data) => {
//   if (err) {
//     console.log(`can't read file ${err}`);
//   } else {
//     const lines = data.toString().split('\n');
//     const linesWithNumbers = [];
//     for(let i = 0; i < lines.length; i++) {
//       linesWithNumbers.push(`${i + 1}   | ${lines[i]}`);
//     }
//     console.log(linesWithNumbers.join('\n'));

//     // `neater` solution
//     // console.log (data
//     // .toString()
//     // .split('\n')
//     // .map( (item, i) => `${i}   | ${item}`)
//     // .join(`\n`));
//   }
// });