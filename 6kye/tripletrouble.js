// Write a function

// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

function tripledouble(num1, num2) {
    // Convert numbers to strings for easier manipulation
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();

    // Loop through digits 0-9 to check for triples in num1 and doubles in num2
    for (let i = 0; i <= 9; i++) {
        const triple = i.toString().repeat(3); // Create a string of the digit repeated 3 times
        const double = i.toString().repeat(2); // Create a string of the digit repeated 2 times

        // Check if strNum1 contains the triple and strNum2 contains the double
        if (strNum1.includes(triple) && strNum2.includes(double)) {
            return 1; // Return 1 if both conditions are met
        }
    }

    return 0; // Return 0 if no such triples and doubles are found
}

// Test cases
console.log(tripledouble(451999277, 41177722899)); // Output: 1
console.log(tripledouble(1222345, 12345)); // Output: 0
console.log(tripledouble(12345, 12345)); // Output: 0
console.log(tripledouble(666789, 12345667)); // Output: 1