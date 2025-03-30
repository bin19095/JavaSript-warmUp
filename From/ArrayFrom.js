
// Example 1: Convert a string to an array
const str = 'hello';
const strArray = Array.from(str);
console.log(strArray); // Output: ['h', 'e', 'l', 'l', 'o']

// Example 2: Convert a Set to an array
const set = new Set(['apple', 'banana', 'cherry']);
const setArray = Array.from(set);
console.log(setArray); // Output: ['apple', 'banana', 'cherry']

// Example 3: Convert a NodeList to an array
const nodeList = document.querySelectorAll('div');
const nodeArray = Array.from(nodeList);
console.log(nodeArray); // Output: [div, div, div, ...]

// Example 4: Using Array.from with a mapping function
const numbers = [1, 2, 3, 4];
const doubled = Array.from(numbers, x => x * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
