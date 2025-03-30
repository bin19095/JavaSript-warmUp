const testObj = {
    1: { id: 1, name: 'John' },
    2: { id: 2, name: 'Sally' },
    3: { id: 3, name: 'Mike' },
};

// Add a new entry
testObj[4] = { id: 4, name: 'Trustee' };
console.log('After Create:', testObj);

// Retrieve an entry by key
const user = testObj[1];
console.log('Read:', user);

// Update an entry by key
if (testObj[2]) {
    testObj[2].name = 'Sally Updated';
}
console.log('After Update:', testObj);

// Remove an entry by key
delete testObj[3];
console.log('After Delete:', testObj);
