// You will be given an array of positive integers. The array should be sorted by the amount of distinct perfect squares and reversed, that can be generated from each number permuting its digits.

// E.g.: arr = [715, 112, 136, 169, 144]

// Number   Perfect Squares w/ its Digits   Amount
//  715                -                       0
//  112               121                      1
//  136               361                      1
//  169           169, 196, 961                3
//  144             144, 441                   2
// So the output will have the following order: [169, 144, 112, 136, 715]

// When we have two or more numbers with the same amount of perfect squares in their permutations, we sorted by their values.

// In the example given above, we can see that 112 and 136 both generate a perfect square. So 112 comes first.

// Examples for this kata:

// sort_by_perfsq([715, 112, 136, 169, 144]) == [169, 144, 112, 136, 715]
// # number of perfect squares:                   3    2    1    1    0
// We may have in the array numbers that belongs to the same set of permutations.

// sort_by_perfsq([234, 61, 16, 441, 144, 728]) == [144, 441, 16, 61, 234, 728]
// # number of perfect squares:                      2    2    1   0   0    0
// Features of the random tests:

// Number of tests: 30
// Arrays between 4 and 16 elements
// Integers having from 1 to 7 digits included

function sortByPerfsq(arr) {
    // Helper function to generate all unique permutations of a number's digits
    function getPermutations(num) {
        const digits = num.toString().split('');
        const uniquePerms = new Set();
        
        function permute(arr, start) {
            if (start === arr.length - 1) {
                uniquePerms.add(Number(arr.join('')));
                return;
            }
            for (let i = start; i < arr.length; i++) {
                [arr[start], arr[i]] = [arr[i], arr[start]];
                permute([...arr], start + 1);
                [arr[start], arr[i]] = [arr[i], arr[start]];
            }
        }
        
        permute(digits, 0);
        return Array.from(uniquePerms);
    }

    // Helper function to check if a number is a perfect square
    function isPerfectSquare(n) {
        const sqrt = Math.sqrt(n);
        return Math.floor(sqrt) === sqrt;
    }

    // Calculate the number of distinct perfect squares for each number
    const countPerfectSquares = arr.map(num => {
        const permutations = getPermutations(num);
        const perfectSquares = permutations.filter(isPerfectSquare);
        return new Set(perfectSquares).size;
    });

    // Sort the array based on the count of perfect squares and then by the number itself
    return arr
        .map((num, index) => ({ num, count: countPerfectSquares[index] }))
        .sort((a, b) => b.count - a.count || a.num - b.num)
        .map(item => item.num);
}

// Example usage:
console.log(sortByPerfsq([715, 112, 136, 169, 144])); // [169, 144, 112, 136, 715]
console.log(sortByPerfsq([234, 61, 16, 441, 144, 728])); // [144, 441, 16, 61, 234, 728]