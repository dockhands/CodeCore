const args = process.argv.slice(2);
const mood = args[0];

// an if-block is a statement, instead of an expression. 
// its like an expression, but it never evaluates to a value.  
// this means that you can't assign it to a variable for eg.

if (mood === "happy") {
    console.log("Yay! ð");
  } else if (mood === "angry") {
    console.log("About what!?");
  } else {
    console.log("Ok. ð¶");
  }


  // cmd+d allows you to edit a bunch of lines at once! 
// ctrl+j joins the lines together 



// When using a conditional or anything expects
// a boolean, you do not need to actually provide
// a boolean. JavaScript will eagerly converty
// to one following certain rules. This is called
// "type coercion".

// To verify how it convert's a value to a boolean,
// use two nots (!!) on the value:


if (1) {
    console.log("Am I being executed?");
  }
  
  !!1; // true
  !!0; // false
  !!"false"; // true
  !!""; // false
  !!Infinity; // true
  !!NaN; // false
  !!undefined; // false
  !![]; // true

