// This is a follow up from my kata Insert Dashes.

// Write a function that takes a non-negative integer, insert dashes ('-') between each two odd digits and insert asterisks ('*') between each two nonzero even digits.

// For example:

// 454793 --> "4547-9-3"
// 1012356895 --> "10123-56*89-5"

function insertDashII(num) {
    // Convert the number to a string
    const numStr = num.toString();
    let result = '';

    for (let i = 0; i < numStr.length; i++) {
        // Append the current digit to the result
        result += numStr[i];

        // Check if the current digit is odd
        if (i < numStr.length - 1) { // Ensure we don't go out of bounds
            const currentDigit = parseInt(numStr[i]);
            const nextDigit = parseInt(numStr[i + 1]);

            // Insert a dash if both current and next digits are odd
            if (currentDigit % 2 !== 0 && nextDigit % 2 !== 0) {
                result += '-';
            }
            // Insert an asterisk if both current and next digits are non-zero even
            else if (currentDigit !== 0 && currentDigit % 2 === 0 && nextDigit !== 0 && nextDigit % 2 === 0) {
                result += '*';
            }
        }
    }

    return result;
}

// Example usage:
console.log(insertDashII(454793)); // Output: "4547-9-3"
console.log(insertDashII(1012356895)); // Output: "10123-56*89-5"