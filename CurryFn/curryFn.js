    function sum(a,b,c) {
        return a + b + c;
    }
    console.log(sum(2,4,5));

    function curry(fn){
        return function(a){
            return function(b){
                return function(c){
                    return fn(a,b,c);
                }
            }
        }
    }

    var sumCurry = curry(sum);
    console.log(sumCurry(2)(4)(5));
    function addEventListener(element, event, handler) {
        element.addEventListener(event, handler);
    }
    
    

 
