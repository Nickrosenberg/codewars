// Given two numbers: 'left' and 'right' (1 <= 'left' <= 'right' <= 200000000000000) return sum of all '1' occurencies in binary representations of numbers between 'left' and 'right' (including both)

// Example:
// countOnes 4 7 should return 8, because:
// 4(dec) = 100(bin), which adds 1 to the result.
// 5(dec) = 101(bin), which adds 2 to the result.
// 6(dec) = 110(bin), which adds 2 to the result.
// 7(dec) = 111(bin), which adds 3 to the result.
// So finally result equals 8.
// WARNING: Segment may contain billion elements, to pass this kata, your solution cannot iterate through all numbers in the segment!

function countOnesUpTo(n) {
    if (n < 0) return 0;
    let count = 0;
    let p = 0; // Power of 2
    while ((1 << p) <= n) {
        let total_pairs = Math.floor((n + 1) / (1 << (p + 1)));
        count += total_pairs * (1 << p); // Full pairs of '1's
        let remainder = (n + 1) % (1 << (p + 1));
        count += Math.max(0, remainder - (1 << p)); // Count extra '1's
        p++;
    }
    return count;
}

function countOnes(left, right) {
    return countOnesUpTo(right) - countOnesUpTo(left - 1);
}

// Example case:
console.log(countOnes(4, 7)); // should return 8