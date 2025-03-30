const str= "Hi How are you, I am in vacation.";

const countStr= str.split("");
let count=0;
let countSpace=0;
for(  x of countStr ){
    console.log(x);
    if( x !==" "){
        console.log(count)
        count++;
    }else{
        console.log("space")
        countSpace++;
    }
    
}


console.log("count",count)
console.log(countSpace);

//counting character
const obj={};

for(let x of str){
    if(obj[x]){
        console.log(x,"inside x",obj[x])
        obj[x] +=1;
    }
    else{
        obj[x]=1;
    }
}

console.log("objCount",obj);
