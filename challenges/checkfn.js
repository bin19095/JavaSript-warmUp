function check(){
    throw new Error("Nothing in values");
}

function checkfn(name=check()){ 
console.log(name)
}

checkfn()
