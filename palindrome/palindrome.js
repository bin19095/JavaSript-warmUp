var wordTransforms = {
    "1 eye for": "1 eye for 1 eye for", // Palindrome
    "you love": "you love you love", // Not a palindrome
    "test": "test" // Palindrome
};
// Transform using the object
function applyTransform(word) {
    var transformed = wordTransforms[word];
    if (transformed && transformed !== word) {
        console.log("Transformed: ".concat(word, " -> ").concat(transformed));
    }
    else {
        console.log("No transformation for: ".concat(word));
    }
}
// Check if a word is a palindrome
function checkPalindrome(word) {
    return word === word.split('').reverse().join('');
}
// Example usage:
function handleInput(inputText) {
    console.log("Input: ".concat(inputText));
    var words = inputText.toLowerCase().split(' ');
    words.forEach(function (word) {
        if (word in wordTransforms) {
            applyTransform(word);
        }
        if (checkPalindrome(word)) {
            console.log("".concat(word, " is a palindrome"));
        }
        else {
            console.log("".concat(word, " is not a palindrome"));
        }
    });
}
// Test the function
handleInput("You love 1 eye for you love test");
