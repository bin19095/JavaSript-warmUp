const USER_MAP = {
    1: { name: 'John' },
    2: { name: "Sally" },
};
const look = Object.entries(USER_MAP);


const testData = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Sally' },
    { id: 3, name: 'Mike' },
]


const testMap= new Map(Object.entries(testData));
testMap.delete("2");
const hasData=testMap.has("1");
console.log("","testing",testMap);

console.log("found data for 1", hasData)
testMap.set((4).toString(), {id:4,name:'trustee'})

console.log('Starting', look);


const userMap = new Map(Object.entries(USER_MAP));

// Iterate over values of look
for (const [key, value] of look) {
    console.log(`Key: ${key}, look Value: ${JSON.stringify(value.name)}`);
}

// Iterate over values of userMap
for (const [key, value] of userMap) {
    console.log(`Key: ${key}, userMap Value: ${JSON.stringify(value)}`);
}
//or
 Object.entries(USER_MAP).map(([key, value]) => console.log(` Test Key${key} Test values:${JSON.stringify(value.name)}`));




// const userMap = new Map([
//     [1, { name: "Keta"}],
//     [2, { name: "Sallly"}],
// ])
console.log(userMap)
//userMap.set(3, { name: "Mike" }); // Add a new entry
userMap.delete(1); // Remove an entry by key
//const user = userMap.get(1); // Retrieve an entry by key
//const hasUser = userMap.has(1); // Check if a key exists
//const size = userMap.size; // Get the number of entries
//userMap.clear(); // Remove all entries
//userMap.forEach((value, key) => console.log(key, value)); // Iterate over entries
// const keys = [...userMap.keys()]; // Get all keys
// const values = [...userMap.values()]; // Get all values
// const entries = [...userMap.entries()]; // Get all entries as [key, value] pairs

console.log( 'deleted 2',userMap)
