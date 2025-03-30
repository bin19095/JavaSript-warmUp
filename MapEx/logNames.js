
const names = ['Alice', 'Bob', 'Charlie', 'Diana'];

names.map(name => {
    console.log(name);
});

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

Object.entries(person).map(([key, value]) => {
    console.log(`${key}: ${value}`);
});
