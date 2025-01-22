// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr) {
    if (arr.length === 0) return 0; // Handle empty array

    let maxSoFar = 0; // Maximum sum found so far
    let maxEndingHere = 0; // Maximum sum of subarray ending here

    for (let num of arr) {
        maxEndingHere += num; // Add the current number to the current subarray

        if (maxEndingHere < 0) {
            maxEndingHere = 0; // Reset if the current subarray sum is negative
        }

        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere; // Update maxSoFar if maxEndingHere is greater
        }
    }

    return maxSoFar; // Return the maximum sum found
}

// Example usage:
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6