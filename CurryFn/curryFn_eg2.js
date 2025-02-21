function curry(fn) {
    return function(a) {
        return function(b) {
            return function(c) {
                return fn(a, b, c);
            }
        }
    }
}

const curriedAddEventListener = curry(addEventListener);

const button = document.querySelector('button');
const handleClick = () => alert('Button clicked!');

const addClickListener = curriedAddEventListener(button)('click');
addClickListener(handleClick);
