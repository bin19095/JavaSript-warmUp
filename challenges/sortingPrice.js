const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 }
];

products.sort((a, b) => a.price - b.price);
console.log(products);
