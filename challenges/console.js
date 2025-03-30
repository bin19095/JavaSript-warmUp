const a = {}
const b = { name: 'b-firstName'}
const c = { name: 'c-firstName'}

a[b] = { name: 'a-firstName'}
a[c] = { name: 'c-secondName'}

console.log(a[b]) // { '[object Object]': { name: 'a-firstName' } }
const history = {};

history[b] = a[b]; // Store the previous value
a[b] = { name: 'a-firstName' };

history[c] = a[b]; // Store previous value before overwriting
a[c] = { name: 'c-secondName' };

console.log(history[b]); // undefined (because a[b] was not set before)
console.log(history[c]); // { name: 'a-firstName' } (previous value before overwriting)
console.log(NaN ==NaN);
console.log(NaN === NaN);
console.log(NaN)

arr = [2,3,4,5,10,100,1,200]
arr.sort( (a,b)=>{
    return a-b;
})

console.log(arr)

