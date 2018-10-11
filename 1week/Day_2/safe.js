const args = process.argv.slice(2);
const password = args[0];

if (password === "714") {
    console.log(`Yay! Opened safe with ${password}`);
  } 
 else {
    console.log("Wrong password");
  }

//   if (password === undefined) { console.log("Password argument is required")
// }

if (!password) { console.log("Password argument is required")
}


// cmd+/ comments out block of text