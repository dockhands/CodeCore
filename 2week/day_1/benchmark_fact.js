function factorialRec(num) { 
    console.log("running")
    if (num === 0) { 
        return 1;
    }else { 
       // console.log(num);
        return num * factorialRec(num-1);

    }
}
console.log(factorialRec(10));


function factorialLoop(num) {
    let result = 1;
    for(let e = 1; e <= num; e++) {
      result *= e;
    }
    return result;
  }
  console.log(factorialLoop(10));
  console.time("Factorial Recursive");
  //code to measure 
  console.timeEnd("Factorial Recursive");