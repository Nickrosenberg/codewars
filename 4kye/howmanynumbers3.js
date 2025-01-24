// We want to generate all the numbers of three digits where:

// the sum of their digits is equal to 10
// their digits are in increasing order (the numbers may have two or more equal contiguous digits)
// The numbers that fulfill these constraints are: [118, 127, 136, 145, 226, 235, 244, 334]. There are 8 numbers in total with 118 being the lowest and 334 being the greatest.

// Task
// Implement a function which receives two arguments:

// the sum of digits (sum)
// the number of digits (count)
// This function should return three values:

// the total number of values which have count digits that add up to sum and are in increasing order
// the lowest such value
// the greatest such value
// Note: if there are no values which satisfy these constaints, you should return an empty value (refer to the examples to see what exactly is expected).

// Examples
// findAll(10, 3)  =>  [8, "118", "334"]
// findAll(27, 3)  =>  [1, "999", "999"]
// findAll(84, 4)  =>  []

    function findAll(sum, count) {
        // Store results
        const results = [];
    
        // Helper function for backtracking
        function backtrack(start, current) {
            // If we have the correct count of digits
            if (current.length === count) {
                // Check if the sum of the digits is equal to the given sum
                if (current.reduce((acc, digit) => acc + digit, 0) === sum) {
                    results.push(current.join('')); // Join digits to form a number
                }
                return; // Backtrack
            }
            
            for (let i = start; i <= 9; i++) {
                // We can include the number 'i' and continue to build
                backtrack(i, [...current, i]); // Pass new current with the new digit
            }
        }
    
        backtrack(1, []); // Start with digits from 1 to 9
    
        // Process results to get the output format
        if (results.length === 0) {
            return []; // Return empty if no results
        }
        
        const lowest = Math.min(...results.map(Number)); // Get the minimum number
        const highest = Math.max(...results.map(Number)); // Get the maximum number
    
        return [results.length, String(lowest), String(highest)];
    }
    
    // Example Usage
    console.log(findAll(10, 3)); // Output: [8, "118", "334"]
    console.log(findAll(27, 3)); // Output: [1, "999", "999"]
    console.log(findAll(84, 4)); // Output: []