function capitalizeNames(names) {
    return names.map(name => {
        if (name.length === 0) return name;
        //console.log(name[0]);
        return name[0].toUpperCase() + name.slice(1).toLowerCase();
    });
}

// Example usage:
const names = ["john", "JANE", "doe", "smith"];
const capitalizedNames = capitalizeNames(names);
console.log(capitalizedNames);


const bool = false;

function returnBooleanToString(boolean){
    if(boolean === true || boolean === false){
        return boolean.toString();
    }else{
        return "Insert boolean value";
    }
}

console.log(typeof(returnBooleanToString(bool)));
console.log(returnBooleanToString(bool));
