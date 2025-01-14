// Given an array of numbers, calculate the largest sum of all possible blocks of consecutive elements within the array. The numbers will be a mix of positive and negative values. If all numbers of the sequence are nonnegative, the answer will be the sum of the entire array. If all numbers in the array are negative, your algorithm should return zero. Similarly, an empty array should result in a zero return from your algorithm.

// largestSum([-1,-2,-3]) == 0
// largestSum([]) == 0
// largestSum([1,2,3]) == 6
// Easy, right? This becomes a lot more interesting with a mix of positive and negative numbers:

// largestSum([31,-41,59,26,-53,58,97,-93,-23,84]) == 187
// The largest sum comes from elements in positions 3 through 7: 59+26+(-53)+58+97 == 187

// Once your algorithm works with these, the test-cases will try your submission with increasingly larger random problem sizes.

function largestSum(arr) {
    // Initialize variables to keep track of the maximum sum and the current sum
    let maxSum = 0; // This will hold the maximum sum found
    let currentSum = 0; // This will hold the current sum of the subarray

    for (let num of arr) {
        currentSum += num; // Add the current number to the current sum

        // If the current sum is greater than the max sum, update max sum
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }

        // If the current sum drops below zero, reset it to zero
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum; // Return the maximum sum found
}

// Example usage:
console.log(largestSum([-1, -2, -3])); // Output: 0
console.log(largestSum([])); // Output: 0
console.log(largestSum([1, 2, 3])); // Output: 6
console.log(largestSum([31, -41, 59, 26, -53, 58, 97, -93, -23, 84])); // Output: 187