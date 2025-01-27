// Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string.

// For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

// W       E       C       R       L       T       E
//   E   R   D   S   O   E   E   F   E   A   O   C  
//     A       I       V       D       E       N    
// The encoded string would be:

// WECRLTEERDSOEEFEAOCAIVDEN
// Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

// Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

// For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

// Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out punctuation as they are a part of the string.

function encodeRailFenceCipher(string, numberRails) {
    if (numberRails < 2 || string.length === 0) return string;

    const rails = Array.from({ length: numberRails }, () => "");
    let railIndex = 0;
    let direction = 1; // 1: downward, -1: upward
    
    for (let char of string) {
        rails[railIndex] += char; // Place the character in the current rail
        // Change direction when we reach the top or bottom rail
        if (railIndex === 0) {
            direction = 1; // Move down
        } else if (railIndex === numberRails - 1) {
            direction = -1; // Move up
        }
        railIndex += direction; // Move to the next rail
    }
    
    // Concatenate all rails to form the encoded string
    return rails.join("");
}

function decodeRailFenceCipher(string, numberRails) {
    if (numberRails < 2 || string.length === 0) return string;
    
    const railLengths = Array.from({ length: numberRails }, () => 0);
    let railIndex = 0;
    let direction = 1; // 1: downward, -1: upward
    
    // First, determine the length of each rail
    for (let i = 0; i < string.length; i++) {
        railLengths[railIndex]++;
        // Change direction when we reach the top or bottom rail
        if (railIndex === 0) {
            direction = 1; // Move down
        } else if (railIndex === numberRails - 1) {
            direction = -1; // Move up
        }
        railIndex += direction; // Move to the next rail
    }
    
    // Create a 2D array to simulate the rails
    const rails = [];
    let currentIndex = 0;
    
    for (let length of railLengths) {
        rails.push(string.slice(currentIndex, currentIndex + length));
        currentIndex += length;
    }
    
    // Decode the message using the rail pattern
    let result = "";
    railIndex = 0;
    direction = 1; // 1: downward, -1: upward
    let railPointers = Array(numberRails).fill(0); // Track pointers for each rail
    
    for (let i = 0; i < string.length; i++) {
        result += rails[railIndex][railPointers[railIndex]++];
        // Change direction when we reach the top or bottom rail
        if (railIndex === 0) {
            direction = 1; // Move down
        } else if (railIndex === numberRails - 1) {
            direction = -1; // Move up
        }
        railIndex += direction; // Move to the next rail
    }
    
    return result;
}

// Example Usage:
const encoded = encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3);
console.log(encoded); // Output: WECRLTEERDSOEEFEAOCAIVDEN

const decoded = decodeRailFenceCipher(encoded, 3);
console.log(decoded); // Output: WEAREDISCOVEREDFLEEATONCE