console.log(x === undefined); // true
var x = 3;

(function (x) {

  console.log(x); // undefined

   
})(3);

const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
console.log(MY_OBJECT);