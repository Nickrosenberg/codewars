// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n) {
    let digits = n.toString().split('');
    let len = digits.length;

    // Step 1: Find the pivot, which is the first digit that is smaller than the digit to its right
    let i;
    for (i = len - 2; i >= 0; i--) {
        if (digits[i] < digits[i + 1]) {
            break;
        }
    }

    // If no pivot is found, it means the number is the highest permutation
    if (i < 0) {
        return -1;
    }

    // Step 2: Find the smallest digit on the right of the pivot that is larger than the pivot
    let j;
    for (j = len - 1; j > i; j--) {
        if (digits[j] > digits[i]) {
            break;
        }
    }

    // Step 3: Swap the pivot with that smallest digit
    [digits[i], digits[j]] = [digits[j], digits[i]];

    // Step 4: Reverse the digits to the right of the pivot
    let nextDigits = digits.slice(0, i + 1).concat(digits.slice(i + 1).reverse());

    // Convert array of digits back to number
    let result = Number(nextDigits.join(''));

    // Return the result
    return result;
}

// Example usage:
console.log(nextBigger(12));     // 21
console.log(nextBigger(513));    // 531
console.log(nextBigger(2017));   // 2071
console.log(nextBigger(9));      // -1
console.log(nextBigger(111));    // -1
console.log(nextBigger(531));    // -1