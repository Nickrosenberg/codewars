// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// function numberToString(num) {
//     // Return a string of the number here!
// }

function numberToString(num) {
    return num.toString(); // You can replace this with any other method.
}

// Test cases
console.log(numberToString(123));   // "123"
console.log(numberToString(999));   // "999"
console.log(numberToString(-100));  // "-100"