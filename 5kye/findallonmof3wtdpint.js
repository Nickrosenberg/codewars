// Given a certain number, how many multiples of three could you obtain with its digits?

// Suposse that you have the number 362. The numbers that can be generated from it are:

// 362 ----> 3, 6, 2, 36, 63, 62, 26, 32, 23, 236, 263, 326, 362, 623, 632 
// But only 3, 6, 36, 63 are multiple of three.

// We need a function that can receive a number and may output in the following order:

// the amount of multiples

// the maximum multiple

// Let's see a case the number has a the digit 0 and repeated digits:

// 6063 ----> 0, 3, 6, 30, 36, 60, 63, 66, 306, 360, 366, 603, 606, 630, 636, 660, 663, 3066, 3606, 3660, 6036, 6063, 6306, 6360, 6603, 6630
// In this case the multiples of three will be all except 0

// 6063 ----> 3, 6, 30, 36, 60, 63, 66, 306, 360, 366, 603, 606, 630, 636, 660, 663, 3066, 3606, 3660, 6036, 6063, 6306, 6360, 6603, 6630
// So the expected result given the above cases:

// Given 362, should return [4, 63]
// (amount of multiples = 4, maximum multiple = 63)

// Given 6063, should return [25, 6630]
// (amount of multiples = 25, maximum multiple = 6630)
// The function will receive only positive integers (num > 0), and you don't have to worry for validating the entries.

// Features of the random tests:

// Number of test = 100
// 1000 ≤ num ≤ 100000000

function findMult_3(num) {
    const digits = String(num).split('').map(Number);
    const uniqueNumbers = new Set();

    // Function to generate all combinations of digits
    function generateCombinations(arr, length, start = 0, current = []) {
        if (current.length === length) {
            // Generate all permutations of the current combination
            generatePermutations(current);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            current.push(arr[i]);
            generateCombinations(arr, length, i + 1, current);
            current.pop();
        }
    }

    // Function to generate all permutations of a combination
    function generatePermutations(arr) {
        const permute = (arr, start = 0) => {
            if (start === arr.length - 1) {
                const numStr = arr.join('');
                const numVal = parseInt(numStr, 10);
                if (numVal % 3 === 0 && numVal !== 0) {
                    uniqueNumbers.add(numVal);
                }
                return;
            }
            for (let i = start; i < arr.length; i++) {
                [arr[start], arr[i]] = [arr[i], arr[start]];
                permute(arr, start + 1);
                [arr[start], arr[i]] = [arr[i], arr[start]];
            }
        };
        permute(arr);
    }

    // Generate all combinations of digits for lengths from 1 to digits.length
    for (let len = 1; len <= digits.length; len++) {
        generateCombinations(digits, len);
    }

    // Convert the set to an array and sort it
    const multiples = Array.from(uniqueNumbers).sort((a, b) => a - b);

    // Count the number of multiples and find the maximum
    const count = multiples.length;
    const maxMultiple = multiples.length > 0 ? multiples[multiples.length - 1] : 0;

    return [count, maxMultiple];
}

// Example usage:
console.log(findMult_3(362));   // Output: [4, 63]
console.log(findMult_3(6063));  // Output: [25, 6630]