// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

// function toNumberArray(stringarray){
// }

function toNumberArray(stringArray) {
    // Use map to iterate through each string in the array, converting each to a number
    return stringArray.map(numStr => parseFloat(numStr));
}

// Test cases
console.log(toNumberArray(["1", "2", "3"])); // [1, 2, 3]
console.log(toNumberArray(["1.5", "2.2", "3.8"])); // [1.5, 2.2, 3.8]
console.log(toNumberArray(["0", "0.1", "-1", "-3.5"])); // [0, 0.1, -1, -3.5]
console.log(toNumberArray([])); // []