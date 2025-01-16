// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

// rot(s):
// Clock rotation 180 degrees.
// rot(s) => "ponm\nlkji\nhgfe\ndcba"
// selfie_and_rot(s) (or selfieAndRot or selfie-and-rot):
// It is an initial string combined with its 180-degree clock-rotated version, interspersed with dots proportional to the length of the segments, to better illustrate the rotation when printed.
// s = "abcd\nefgh\nijkl\nmnop" --> 
// "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
// On printing, these functions work as follows:

// |rot             |selfie_and_rot
// |abcd --> ponm   |abcd --> abcd....
// |efgh     lkji   |efgh     efgh....
// |ijkl     hgfe   |ijkl     ijkl....   
// |mnop     dcba   |mnop     mnop....
//                            ....ponm
//                            ....lkji
//                            ....hgfe
//                            ....dcba
// Notice that the number of dots is the common length of "abcd", "efgh", "ijkl", "mnop".

// Task:
// Write these two functions rot and selfie_and_rot
// and

// high-order function oper(fct, s) where

// fct is the function of one variable f to apply to the string s (fct will be one of rot, selfie_and_rot)

// Examples:
// s = "abcd\nefgh\nijkl\nmnop"
// oper(rot, s) => "ponm\nlkji\nhgfe\ndcba"
// oper(selfie_and_rot, s) => "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"

function rot(strng) {
    // Split string into lines, reverse order, and then reverse each line
    return strng.split('\n').reverse().map(line => line.split('').reverse().join('')).join('\n');
}

function selfieAndRot(strng) {
    const lines = strng.split('\n');
    const dotCount = lines[0].length; // Length of each line
    const dots = '.'.repeat(dotCount); // Prepare dots string
    const selfie = lines.map(line => line + dots).join('\n'); // Append dots to each line
    const rotated = rot(strng); // Get the rotated version
    return selfie + '\n' + dots + rotated.split('\n').join('\n' + dots); // Combine selfie and rotated
}

function oper(fct, s) {
    return fct(s); // Apply the passed function to the string
}

// Example usage
var s = "abcd\nefgh\nijkl\nmnop";
console.log(oper(rot, s)); // Should output the rotated string
console.log(oper(selfieAndRot, s)); // Should output the selfie and rotated string