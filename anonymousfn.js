const handleTimeout = () =>{
    console.log("Timeout...");   
}

setTimeout(handleTimeout, 2000);
//handlTimeout funtion as variable

function init() {
    function greet() {
        console.log("HI");
        
    }
    greet();
}
greet();
init();