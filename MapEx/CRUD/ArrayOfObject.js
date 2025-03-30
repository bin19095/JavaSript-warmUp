const testData = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Sally' },
    { id: 3, name: 'Mike' },
];

// Add a new entry
testData.push({ id: 4, name: 'Trustee' });
console.log('After Create:', testData);
// Find an entry by id
const user = testData.find(user => user.id === 1);
console.log('Read:', user);
// Update an entry by id
const index = testData.findIndex(user => user.id === 2);
if (index !== -1) {
    testData[index].name = 'Sally Updated';
}
console.log('After Update:', testData);
// Remove an entry by id
const updatedTestData = testData.filter(user => user.id !== 3);
console.log('After Delete:', updatedTestData);
