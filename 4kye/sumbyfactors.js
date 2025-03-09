// Given an array of positive or negative integers

//  I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

// Example:
// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

function sumOfDivided(lst) {
    if (lst.length === 0) return [];

    // Helper function to get prime factors of a number
    function getPrimeFactors(n) {
        const factors = new Set();
        n = Math.abs(n); // Handle negative numbers
        // Count the number of 2s that divide n
        while (n % 2 === 0) {
            factors.add(2);
            n = n / 2;
        }
        // n must be odd at this point, so a skip of 2 (i.e., i = i +2) can be used
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            while (n % i === 0) {
                factors.add(i);
                n = n / i;
            }
        }
        // This condition is to check if n is a prime number greater than 2
        if (n > 2) {
            factors.add(n);
        }
        return Array.from(factors);
    }

    // Map to store prime factors and their sums
    const primeSumMap = new Map();

    // Iterate through each number in the list
    for (const num of lst) {
        const factors = getPrimeFactors(num);
        for (const factor of factors) {
            if (!primeSumMap.has(factor)) {
                primeSumMap.set(factor, 0);
            }
            primeSumMap.set(factor, primeSumMap.get(factor) + num);
        }
    }

    // Convert the map to an array of arrays and sort by prime factor
    const result = Array.from(primeSumMap).sort((a, b) => a[0] - b[0]);

    return result;
}