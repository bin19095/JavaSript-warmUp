const arrArray = [
    "first element",
    "second element",
]
const [ first, second ] = arrArray;
console.log(first, second);

//Destructuring objects
const objList = {
    first: "objs first name",
    second: "objs second content"
};

// const { firstName, seconContent } = objList;
// console.log( first, second );

// using alisa in object
const { name: userName, age:agy } ={
    name: "max",
    age:4
};
console.log(userName);
console.log(agy);

const { firstName,secondName } = objList;
console.log(first, second);