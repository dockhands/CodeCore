//const operations = require('./add.js');

// console.log(operations.addFn(4, 5));
// console.log(operations.multiplyFn(4, 5));

let countries = require("./countries.js");
console.log(countries);
// countries.forEach ( (country) => {
//   console.log(`${country} - ${country.length}`);
// });

for(let country of countries) {
  console.log(`${country} - ${country.length}`);
}