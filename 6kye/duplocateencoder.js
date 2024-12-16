// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// function duplicateEncode(word){
//     // ...
//     return '';
// }

function duplicateEncode(word) {
    // Convert the word to lowercase to ignore capitalization
    const lowerCaseWord = word.toLowerCase();
    
    // Create an object to count occurrences of each character
    const charCount = {};

    // Count occurrences of each character
    for (let char of lowerCaseWord) {
        // Increment the count for the character
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Build the new string based on occurrences
    let result = '';
    for (let char of lowerCaseWord) {
        // Append "(" or ")" depending on the count of the character
        result += charCount[char] === 1 ? '(' : ')';
    }

    return result;
}
