function test3(){
    return "hello"
}
const hobbies =["test1", 'test2', test3(),1, "1"];
console.log( hobbies);
const indexes = hobbies.findIndex((item) => item === "working");
hobbies.push("working");
console.log(hobbies);
const index = hobbies.findIndex((item) => item === "working");

const replaceDataUsingIndexSplice = hobbies.splice(index,1,"working2" );
const replaceDatUsingIndexWith = hobbies.with(index,"replacing wokring2 with working 3");//copies array then modifies using with
//Similary, toString, valueOf, toSort(), toReverse() makes copies and follows as normal function does to it's corresponding name

console.log("final hobbies",hobbies)
//hobbies.map(( item ) => item + "!");
console.log(index);
console.log(indexes);
console.log("replacedValue:", replaceDataUsingIndexSplice);
console.log("finaValue:Hobbies:-",replaceDatUsingIndexWith)
nums = [11,22,3,,45,6]
const sum = nums.reduce((acc,cur) => acc + cur)

const over = nums.filter(num => num > 20)
console.log("sum",sum);
console.log("filtered ", over);

/* 


map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/