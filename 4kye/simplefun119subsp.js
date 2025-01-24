// Task
// You are given integer n determining set S = {1, 2, ..., n}. Determine if the number of k-element subsets of S is ODD or EVEN for given integer k.

// Example
// For n = 3, k = 2, the result should be "ODD"

// In this case, we have 3 2-element subsets of {1, 2, 3}:

// {1, 2}, {1, 3}, {2, 3}

// For n = 2, k = 1, the result should be "EVEN".

// In this case, we have 2 1-element subsets of {1, 2}:

// {1}, {2}

// Don't bother with naive solution - numbers here are really big.

// Input/Output
// [input] integer n

// 1 <= n <= 10^9

// [input] integer k

// 1 <= k <= n

// [output] a string

// "EVEN" or "ODD" depending if the number of k-element subsets of S = {1, 2, ..., n} is ODD or EVEN.

function subsetsParity(n, k) {
    // Function to count the number of 1's in the binary representation of a number
    function countOnes(x) {
        let count = 0;
        while (x > 0) {
            count += (x & 1);
            x >>= 1;
        }
        return count;
    }

    let oddOrEven = 'ODD';
    
    // Use the representation of n and k in binary
    while (n > 0 || k > 0) {
        let nBit = n & 1;  // Last bit of n
        let kBit = k & 1;  // Last bit of k
        
        // If k requires more 1's than n can provide at this position
        if (kBit > nBit) {
            oddOrEven = 'EVEN';
            break;
        }
        
        // Shift right to check the next bit
        n >>= 1;
        k >>= 1;
    }
    
    return oddOrEven;
}

// Example usage:
console.log(subsetsParity(3, 2)); // Output: "ODD"
console.log(subsetsParity(2, 1)); // Output: "EVEN"
console.log(subsetsParity(10, 5)); // Output: "EVEN"
console.log(subsetsParity(5, 2)); // Output: "ODD"