let transforms = {
    "1 eye for": "1 eye for 1 eye for", // Palindrome
    "you love": "you love you love",     // Not a palindrome
    "test": "test"                 // Palindrome
};

// Transform using the object
function transformWord(word) {
    let transformed = transforms[word];

    if (transformed && transformed !== word) {
        console.log(`Transformed: ${word} -> ${transformed}`);
    } else {
        console.log(`No transformation for: ${word}`);
    }
}

// Check if a word is a palindrome
function isPalindrome(word) {
    return word === word.split('').reverse().join('');
}

// Example usage:
function processInput(inputText) {
    console.log(`Input: ${inputText}`);

    let words = inputText.toLowerCase().split(' ');
    
    words.forEach(word => {
        if (word in transforms) {
            transformWord(word);
        }
        
        if (isPalindrome(word)) {
            console.log(`${word} is a palindrome`);
        } else {
            console.log(`${word} is not a palindrome`);
        }
    });
}

// Test the function
processInput("You love 1 eye for you love test");
