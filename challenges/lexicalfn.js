
// Certainly! A lexical function, also known as a closure, is a function that retains access to its lexical scope, even when the function is executed outside that scope. Closures are a powerful
// feature in JavaScript that allow functions to "remember" the environment in which they were created.
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


function createPerson(name) {
    let age = 0;

    return {
        getName: function() {
            return name;
        },
        getAge: function() {
            return age;
        },
        growOlder: function() {
            age++;
        }
    };
}

const person = createPerson('Alice');
console.log(person.getName()); // Alice
console.log(person.getAge()); // 0
person.growOlder();
console.log(person.getAge()); // 1
