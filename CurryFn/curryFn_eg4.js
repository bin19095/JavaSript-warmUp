function validateField(field, value, validator) {
    return validator(value) ? `${field} is valid` : `${field} is invalid`;
}

function curry(fn) {
    return function(a) {
        return function(b) {
            return function(c) {
                return fn(a, b, c);
            }
        }
    }
}

const curriedValidateField = curry(validateField);

const validateEmail = curriedValidateField('Email');
const validateEmailWithValue = validateEmail('test@example.com');
const emailValidationResult = validateEmailWithValue(value => /\S+@\S+\.\S+/.test(value));

console.log(emailValidationResult);
