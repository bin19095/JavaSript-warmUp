const testMap = new Map([
    [1, { id: 1, name: 'John' }],
    [2, { id: 2, name: 'Sally' }],
    [3, { id: 3, name: 'Mike' }],
]);

// Add a new entry
testMap.set(4, { id: 4, name: 'Trustee' });
console.log('After Create:', [...testMap.entries()]);
// Retrieve an entry by key
const user = testMap.get(1);
console.log('Read:', user);
// Update an entry by key
if (testMap.has(2)) {
    testMap.set(2, { id: 2, name: 'Sally Updated' });
}
console.log('After Update:', [...testMap.entries()]);
// Remove an entry by key
testMap.delete(3);
console.log('After Delete:', [...testMap.entries()]);
