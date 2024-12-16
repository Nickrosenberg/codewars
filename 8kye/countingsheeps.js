// // Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// // For example,

// // [true,  true,  true,  false,
// //   true,  true,  true,  true ,
// //   true,  false, true,  false,
// //   true,  false, false, true ,
// //   true,  true,  true,  true ,
// //   false, false, true,  true]
// // The correct answer would be 17.

// // Hint: Don't forget to check for bad values like null/undefined

// function countSheeps(sheep) {
//     // TODO
//   }

function countSheeps(sheep) {
    let count = 0; // Initialize a counter to zero
    
    // Loop through each element in the sheep array
    for (let i = 0; i < sheep.length; i++) {
        // If the current element is true, increment the counter
        if (sheep[i] === true) {
            count++;
        }
    }
    
    // Return the total count of sheeps present
    return count;
}

// Example usage:
const sheepArray = [
    true,  true,  true,  false,
    true,  true,  true,  true,
    true,  false, true,  false,
    true,  false, false, true,
    true,  true,  true,  true,
    false, false, true,  true
];

console.log(countSheeps(sheepArray)); // Output: 17