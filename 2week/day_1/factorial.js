

function factorial(num) { 
    console.log("running")
    if (num === 0) { 
        return 1;
    }else { 
       // console.log(num);
        return num * factorial(num-1);

    }
}
factorial(5);
console.log(factorial(3));

