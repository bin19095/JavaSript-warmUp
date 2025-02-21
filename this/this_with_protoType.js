class Person {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
}

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}

class SuperHero extends Person {
    constructor(fName, lName) {
        super(fName, lName);
        this.isSuperHero = true;
    }

    fightCrime() {
        console.log('Fighting Crime');
    }
}

const batman = new SuperHero('Bruce', 'Wayne');

console.log(batman.getFullName()); // Bruce Wayne
batman.fightCrime(); // Fighting Crime

