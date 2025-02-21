var c = 10;
var c= 20;
let d = 10;
 d = 20;

console.log(c); // 20
console.log(d)
function varScope() {
    if (true) {
      var x = 10;
    }
    console.log(x); // 10 (x is accessible here)
  }
  
  function letScope() {
    if (true) {
      let y = 10;
    }
    console.log(y); // ReferenceError: y is not defined (y is not accessible here)
  }