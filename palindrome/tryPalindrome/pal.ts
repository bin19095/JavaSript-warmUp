let wordTransformsLocal: { [key: string]: string } = {
    "1 eye for": "1 eye for 1 eye for", // Palindrome
    "you love": "you love you love",     // Not a palindrome
    "test": "test"                 // Palindrome
};

// Transform using the object
function applyTransform(word: string): void {
    let transformed = wordTransformsLocal[word];

    if (transformed && transformed !== word) {
        console.log(`Transformed: ${word} -> ${transformed}`);
    } else {
        console.log(`No transformation for: ${word}`);
    }
}

// Check if a word is a palindrome
function checkPalindrome(word: string): boolean {
    return word === word.split('').reverse().join('');
}

// Example usage:
function handleInput(inputText: string): void {
    console.log(`Input: ${inputText}`);

    let words = inputText.toLowerCase().split(' ');
    
    words.forEach(word => {
        if (word in wordTransformsLocal) {
            applyTransform(word);
        }
        
        if (checkPalindrome(word)) {
            console.log(`${word} is a palindrome`);
        } else {
            console.log(`${word} is not a palindrome`);
        }
    });
}

// Test the function
handleInput("You love 1 eye for you love test");
