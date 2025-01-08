// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength(array) {
    // Sort the array using the sort method
    return array.sort((a, b) => a.length - b.length);
}

  // Example usage:
console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])); 
  // Output: ["Eyes", "Glasses", "Monocles", "Telescopes"]

console.log(sortByLength(["Short", "Longer", "Longest", "Tiny"])); 
  // Output: ["Tiny", "Short", "Longer", "Longest"]

console.log(sortByLength(["Apple", "Banana", "Kiwi", "Peach"])); 
  // Output: ["Kiwi", "Peach", "Apple", "Banana"]