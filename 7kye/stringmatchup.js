// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// Example
// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']
// How many times do the elements in array2 appear in array1?

// 'abc' appears twice in the first array (2)
// 'cde' appears only once (1)
// 'uap' does not appear in the first array (0)
// Therefore, solve(array1, array2) = [2, 1, 0]

function solve(a, b) {
    // Create a frequency map for the first array
    const frequencyMap = {};
    
    // Count occurrences of each string in the first array
    for (const str of a) {
        if (frequencyMap[str]) {
            frequencyMap[str]++;
        } else {
            frequencyMap[str] = 1;
        }
    }
    
    // Create an array to hold the results for the second array
    const result = [];
    
    // Count occurrences for each string in the second array
    for (const str of b) {
        result.push(frequencyMap[str] || 0); // Push the count or 0 if not found
    }
    
    return result;
}

// Example usage:
const array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw'];
const array2 = ['abc', 'cde', 'uap'];
console.log(solve(array1, array2)); // Output: [2, 1, 0]