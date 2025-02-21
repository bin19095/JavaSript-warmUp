const hobbies =["test1", 'test2',1, "1"];
console.log(hobbies);
const objectsList = hobbies.map( ( ) => ({ text: hobbies}));
console.log (Object.keys(objectsList));


//console.group()
//console.log(Object.getOwnPropertyNames(objectsList));
objectsList.forEach((item, index) => {
    console.log(`Item ${index + 1}:`);
    item.text.forEach((textItem) => {
      console.log(textItem);
    });
  });
  objectsList.map((item, index) => {
    console.log(`Item ${index + 1}:`);
    item.text.map(textItem => console.log(textItem));
  });