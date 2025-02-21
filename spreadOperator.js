const hobbies = ['sporst', 'cooking'];
const user = {
    name: 'bin',
    age: 30
};

const newHobbies = ["Reading"];

const mergeHobbies = [...hobbies, ...newHobbies];
console.log(mergeHobbies);

const extendedUser = {
    ...user,
    isAdmin: true,
    
}
const userLocation = {
    district: "dianella",
    postCode: 6059
}

const mergeObject = {
    ...user,
    ...userLocation
}
console.log(extendedUser);
console.log("Print user N location", mergeObject);