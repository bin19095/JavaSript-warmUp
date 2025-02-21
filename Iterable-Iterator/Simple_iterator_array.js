const arr = [10, 20, 30];
const iterator = arr[Symbol.iterator]();

// console.log(iterator.next());  // { value: 10, done: false }
// console.log(iterator.next());  // { value: 20, done: false }
// console.log(iterator.next());  // { value: 30, done: false }



let result = iterator.next();
while (!result.done) {
    console.log(result.value);
    result = iterator.next();
}
