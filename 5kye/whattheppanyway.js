// A perfect power is a classification of positive integers:

// In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

// Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

// Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

// Examples
// describe("perfect powers", function(){
//   it("should work for some examples",function(){
//     assert.deepEqual(isPP(4), [2,2], "4 = 2^2");
//     assert.deepEqual(isPP(9), [3,2], "9 = 3^2");
//     assert.strictEqual(isPP(5), null, "5 isn't a perfect number");
//   });
// });

function isPP(n) {
    for (let k = 2; k <= Math.log2(n); k++) {
        // Calculate the k-th root of n, rounded down to the nearest integer
        let m = Math.floor(n ** (1 / k));
        // Check if m^k is exactly n
        if (Math.pow(m, k) === n) {
            return [m, k];
        }
        // Also check (m + 1) because rounding might cause us to miss a perfect power
        if (Math.pow(m + 1, k) === n) {
            return [m + 1, k];
        }
    }
    return null; // If no pair is found
}

// Test examples
console.log(isPP(4)); // [2, 2]
console.log(isPP(9)); // [3, 2]
console.log(isPP(5)); // null
console.log(isPP(81)); // [3, 4] or [9, 2] (Either is acceptable)