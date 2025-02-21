class Person {
    constructor(fName, lName) {
        this.firstName = fName
        this.lastName = lName
    }
}

const person1 = new Person('Bruce', 'Wayne')
const person2 = new Person('Clark', 'Kent')

// person1.getFullName = function () {
//     return this.firstName + '' + this.lastName
// }

//protoType

Person.prototype.getFullName = function () {
    return this.firstName +'' + this.lastName
}

console.log(person1.getFullName());

