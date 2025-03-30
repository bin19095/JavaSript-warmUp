const obj = { a: 1, b: 2, c: 3 };
const array1 =['a', 'b', 'c'];

const entries = Object.entries(array1);
console.log(`entries: ${entries}`);
const newObj = Object.fromEntries(entries);

console.log(newObj); // { a: 1, b: 2, c: 3 }
