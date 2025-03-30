function paginate(array, pageSize, pageNumber) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
console.log(paginate(data, 10, 2)); //
console.log(paginate(data, 10, 1)); //
