// You are given a string containing 0's, 1's and one or more '?', where ? is a wildcard that can be 0 or 1.

// Return an array containing all the possibilities you can reach substituing the ? for a value.

// Examples
// '101?' -> ['1010', '1011']

// '1?1?' -> ['1010', '1110', '1011', '1111']
// Notes:

// Don't worry about sorting the output.
// Your string will never be empty.
// Have fun!

function possibilities(str) {
    let result = [];

    function backtrack(current, index) {
        if (index === str.length) {
            result.push(current);
            return;
        }
        
        if (str[index] === '?') {
            // Replace '?' with '0'
            backtrack(current + '0', index + 1);
            // Replace '?' with '1'
            backtrack(current + '1', index + 1);
        } else {
            // Continue with the current character
            backtrack(current + str[index], index + 1);
        }
    }

    backtrack('', 0);
    return result;
}

// Example usage:
console.log(possibilities('101?')); // ['1010', '1011']
console.log(possibilities('1?1?')); // ['1010', '1110', '1011', '1111']