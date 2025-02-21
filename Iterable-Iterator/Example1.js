//iterables and iterators - protocols
const obj = {
    [Symbol.iterator]: function () {
        let step = 0
        const iterator = {
            next: function() {
                step++
                if(step === 1){
                   return {value:'Hello' , done: false}
                    }else if(step ===2 ){
                        return { value: 'world', done: false}
                    }
                    return { value: undefined, done:true}
                },
        }
        return iterator
        
        
        }
    }

    for(let value of obj){
        console.log(value)
    }
 //Hello
function* generatorFunction(){
    yield 'Hello'
    yield 'World'
}

const generatorObject = generatorFunction()

for(const word of generatorObject){
    console.log(word)
}
