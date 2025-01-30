// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
// test data only employs positive integers.

function nextSmaller(n) {
    const digits = n.toString().split('').map(Number);
    const len = digits.length;

    // Step 1: Find the first decreasing element from the right
    let i;
    for (i = len - 2; i >= 0; i--) {
        if (digits[i] > digits[i + 1]) {
            break;
        }
    }

    // If no such element is found, return -1
    if (i < 0) {
        return -1;
    }

    // Step 2: Find the largest digit to the right of `i` that is smaller than digits[i]
    let j;
    for (j = len - 1; j > i; j--) {
        if (digits[j] < digits[i]) {
            break;
        }
    }

    // Step 3: Swap the found digits
    [digits[i], digits[j]] = [digits[j], digits[i]];

    // Step 4: Reverse the digits to the right of `i`
    const rightPart = digits.slice(i + 1).sort((a, b) => b - a);
    const resultDigits = digits.slice(0, i + 1).concat(rightPart);

    // Step 5: Convert back to number and check for leading zeros
    const result = parseInt(resultDigits.join(''), 10);
    return result < n && resultDigits[0] !== 0 ? result : -1;
}

// Test cases
console.log(nextSmaller(21));    // 12
console.log(nextSmaller(531));   // 513
console.log(nextSmaller(2071));  // 2017
console.log(nextSmaller(9));     // -1
console.log(nextSmaller(111));   // -1
console.log(nextSmaller(135));   // -1
console.log(nextSmaller(1027));  // -1