const pickBy = (obj, cb) => {

    const newObj = {};
    for (let key in obj) {
        if (cb(key, obj[key], obj)) newObj[key] = obj[key];
    }
    return newObj;
};



const objA = { a: 1, b: 2, c: 3, d: 4, e: 5 };

const isA = key => key ==="a";
const isACE = key => ["a", "c", "e"].includes(key);
console.log(pickBy(objA, isA)); // returns { a: 1 }
console.log(pickBy(objA, isACE)); // returns { a: 1, c: 3, e: 5 }

const objB = { lana: 10, Liam: 4, lyn: 16, derek: 19, diana: 21 };

console.log(pickBy(objB, key => key[0].toLowerCase() === "l")); // returns { lana: 10, Liam: 4, lyn: 16 }