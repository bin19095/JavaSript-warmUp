function generatorOTP(length){
    let otp= "";
    for(let i=0; i<length; i++){
        otp+=Math.floor(Math.random()*10);


    }
    return otp;

};

console.log(generatorOTP(6))
