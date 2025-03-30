const myIterable = {
    data: ["A", "B", "C"],
    index: 0,
    [Symbol.iterator]() {
        const self = this; // Store reference to myIterable
        return {
            next() {
                if (self.index < self.data.length) {
                    return { value: self.data[self.index++], done: false };
                }
                return { done: true };
            }
        };
    }
};
//const iterator = myIterable[Symbol.iterator]();

for( let data of myIterable ){
    console.log(data);  // Outputs: A, B, C one by one.  After C, done: true.  
    // This is an example of an iterable.  It's a way of looping through a collection. 
    //  In this case, it's an array.  You can use it with Array.prototype.forEach, Array.prototype.map, and Array.prototype.filter.  It also supports for...of loop.  In the case of an iterable, you can use the spread operator to spread the elements into a new array or pass it to a function.  In this example, it's being used with console.log.  It's a nice feature of JavaScript ES6.  It's a way of making your code more readable and efficient.  It's also a great way to make your code more flexible and easier to maintain.  It's a very useful feature.  It's a good way to make your code more readable and efficient
}
