const array1 = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l"];
const offSet = 5;
const obj1= Object.fromEntries(Object.entries(array1));//converting array list into object list

const arrayLength = array1.length;
const arrEqualDivide = arrayLength/offSet; 
const checkDivide = arrayLength%offSet==0 //checking if the length of content is odd or even
const arrContainer = checkDivide ? arrEqualDivide : Math.floor(arrEqualDivide + 1);//creating number of new array needed as container

let arrayDivide=[];
let index=0;
for(let i=0; i<arrContainer; i++){
     arrayDivide[i] =  array1.slice(index,(index +offSet)) 
    index= index + offSet;
}
let x=0;
while(x < arrayDivide.length ){
    console.log("compartedArray=>",arrayDivide[x++]);
    
}
console.log(obj1)
