const myIterable = {
    data: [{ "value1": "Car", "value2": "Racing Car" }],
    index: 0,
    [Symbol.iterator]() {
        const self = this; // Store reference to myIterable
        return {
            next() {
                if (self.index < self.data.length) {
                    const values = Object.values(self.data[self.index++]);
                    return { value: values, done: false };
                }
                return { done: true };
            }
        };
    }
};

for (let values of myIterable) {
    console.log(values);  // Outputs: ["Car", "Racing Car"]
}

console.log(myIterable.next())
