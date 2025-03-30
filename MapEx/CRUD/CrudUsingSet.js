
const testData = [
    { id: 1, name: 'Johny' },
    { id: 2, name: 'Sally' },
    { id: 3, name: 'Mike' },
]

const testSet = new Set(testData);
console.log('disect',testSet);

// Add a new entry
const newEntry = { id: 4, name: 'Trustee' }
testSet.add(newEntry);
console.log('After Create:', [...testSet]);

// Find an entry by id
const user = [...testSet].find(user => user.id === 1);
console.log('Read:', user);
// Update an entry by id
const updatedSet = new Set([...testSet].map(user => 
    user.id === 2 ? { ...user, name: 'Sally Updated' } : user
));
console.log('After Update:', [...updatedSet]);

// Remove an entry by id
const updatedSet2 = new Set([...testSet].filter(user => user.id !== 3));
console.log('After Delete:', [...updatedSet]);
