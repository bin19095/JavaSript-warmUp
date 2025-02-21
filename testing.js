// const numberArray =  [1,2,3,4]


//     // Todo: Add your logic
//     // should return an array of objects
//     const transformToObjects = numberArray.map( ( item ) => ({ val: item }));


// console.log(transformToObjects);
// console.log( numberArray)



// Alternatives
const numberArrays = [1,2,3];
function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
return numberArray.map( item  => {
        return { val: item }
});
    
}
console.log(transformToObjects(numberArrays));

