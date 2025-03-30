var nameList = ['firstName', 'secondName', 'thirdName', 'fourthName', 'fifthName'];

var objList = {
  name: 'firstList',
  age: '20',
  address: 123,
  city: 'cityName'
}

nameList.forEach(myFunction);


function myFunction(value, index, array) {
  let temp;
   temp = value.slice(0,1).toUpperCase() + value.slice(1,value.length).toLowerCase();
 // console.log(temp);
return temp;
}

var store = objList.name.slice(0,1).toUpperCase() + objList.name.slice(1,objList.name.length).toLowerCase();
console.log("fullName",store);

var upperByMap = nameList.map((value) => myFunction(value));
console.log("upperByMap",upperByMap);
