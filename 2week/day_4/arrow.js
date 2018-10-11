// let a = 2;
// let b = 3;

const add = (a,b) => a + b;
console.log(add(3,2));
//const multiplyES6 = (x, y) => x * y;

const flip = (fn) => { 
    return function (a,b) { 
        return fn(b,a)
    };
}
console.log(flip (add(2,3)));

