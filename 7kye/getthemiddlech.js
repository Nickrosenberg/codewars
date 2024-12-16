// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

// function getMiddle(s) {
//     //Code goes here!
//     return '';
// }

function getMiddle(s) {
    // Calculate the length of the string
    const length = s.length;

    // Check if the length is odd or even
    if (length % 2 === 0) {
        // For even length, return the two middle characters
        const midIndex = length / 2;
        return s.substring(midIndex - 1, midIndex + 1);
    } else {
        // For odd length, return the middle character
        const midIndex = Math.floor(length / 2);
        return s.charAt(midIndex);
    }
}

// Example usage:
console.log(getMiddle("test"));     // Outputs: "es"
console.log(getMiddle("testing"));  // Outputs: "t"
console.log(getMiddle("middle"));   // Outputs: "dd"
console.log(getMiddle("A"));        // Outputs: "A"