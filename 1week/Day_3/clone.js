
//create some obj clone
let clonedObj = {};

//create some original object
let dan = {name: "dan", iq: "100"};

//function that clones some original Object
// will return a cloned objClone
function clone (objOrig) { 

// go through all the keys of original clone
for (let keys in objOrig) { 
  
    clonedObj[keys] = objOrig[keys];
    

}
    console.log("cloned object keys and values are now : ");
    console.log(clonedObj);
return clonedObj;
}

clone(dan);
console.log( dan === clonedObj);



// $ node
// > let objA = {a: 1, b: 2}
// > let objB = clone(objA)
// > objB
// {a: 1, b: 2}
// > objA === objB
// false