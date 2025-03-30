const output=
"What si your perfect first night?"
 let store1=output.split("")
.map(parseInt);
console.log(store1);
let store2=store1.filter(a =>a).reduce((a,b)=> a+b)

let store3= store2.toString().split("")
let store4=store3.reverse()
.join("");
console.log(store4);
console.log(store3);
// console.log(store2);
