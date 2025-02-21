console.log(x === undefined); // true
var x = 3;

(function (x) {

  console.log(x); // undefined

   
})();

const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
console.log(MY_OBJECT);
