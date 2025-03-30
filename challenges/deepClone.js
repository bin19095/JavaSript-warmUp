//Used when copying deeply nested objects.
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const original = { name: "Alice", details: { age: 25 } };
const copy = deepClone(original);

copy.details.age = 30;
console.log(original.details.age); // Still 25
