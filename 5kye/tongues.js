// Tongues
// Gandalf's writings have long been available for study, but no one has yet figured out what language they are written in. Recently, due to programming work by a hacker known only by the code name ROT13, it has been discovered that Gandalf used nothing but a simple letter substitution scheme, and further, that it is its own inverse|the same operation scrambles the message as unscrambles it.

// This operation is performed by replacing vowels in the sequence 'a' 'i' 'y' 'e' 'o' 'u' with the vowel three advanced, cyclicly, while preserving case (i.e., lower or upper).

// Similarly, consonants are replaced from the sequence 'b' 'k' 'x' 'z' 'n' 'h' 'd' 'c' 'w' 'g' 'p' 'v' 'j' 'q' 't' 's' 'r' 'l' 'm' 'f' by advancing ten letters.

// So for instance the phrase 'One ring to rule them all.' translates to 'Ita dotf ni dyca nsaw ecc.'

// The fascinating thing about this transformation is that the resulting language yields pronounceable words. For this problem, you will write code to translate Gandalf's manuscripts into plain text.

// Your job is to write a function that decodes Gandalf's writings.

// Input
// The function will be passed a string for the function to decode. Each string will contain up to 100 characters, representing some text written by Gandalf. All characters will be plain ASCII, in the range space (32) to tilde (126).

// Output
// For each string passed to the decode function return its translation.

function tongues(code) {
    // Define the vowel and consonant sequences
    const vowels = ['a', 'i', 'y', 'e', 'o', 'u'];
    const consonants = ['b', 'k', 'x', 'z', 'n', 'h', 'd', 'c', 'w', 'g', 'p', 'v', 'j', 'q', 't', 's', 'r', 'l', 'm', 'f'];
    
    // Create a mapping for lowercase and uppercase vowels and consonants
    const vowelMap = {};
    const consonantMap = {};
    
    // Create mappings for vowels
    for (let i = 0; i < vowels.length; i++) {
        const original = vowels[i];
        const decoded = vowels[(i + 3) % vowels.length];
        vowelMap[original] = decoded;
        vowelMap[original.toUpperCase()] = decoded.toUpperCase();
    }
    
    // Create mappings for consonants
    for (let i = 0; i < consonants.length; i++) {
        const original = consonants[i];
        const decoded = consonants[(i + 10) % consonants.length];
        consonantMap[original] = decoded;
        consonantMap[original.toUpperCase()] = decoded.toUpperCase();
    }
    
    // Decode the input string
    let decodedText = '';
    for (let char of code) {
        if (vowelMap[char]) {
            decodedText += vowelMap[char];
        } else if (consonantMap[char]) {
            decodedText += consonantMap[char];
        } else {
            decodedText += char; // Keep non-alphabet characters as is
        }
    }
    
    return decodedText;
}

// Example usage:
console.log(tongues("Ita dotf ni dyca nsaw ecc.")); // Output: "One ring to rule them all."