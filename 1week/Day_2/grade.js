// take arguments from terminal
const  args = process.argv.slice(2);

//turn args into numbers
let num = parseInt(args[0]);

if ( num < 0 || num > 100) { 

    console.log("Invalid Grade");
}

else if ( num < 50) {
    console.log("F");
}

else if ( num < 70) {
    console.log("C");
}


else if ( num < 90) {
    console.log("B");
}

else {console.log("A"); 
}



