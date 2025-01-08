// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
    // Convert the number to a string, split into an array of characters, sort in descending order, and then join back
    return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
}

  // Examples:
  console.log(descendingOrder(42145));      // Output: 54421
  console.log(descendingOrder(145263));     // Output: 654321
  console.log(descendingOrder(123456789));  // Output: 987654321