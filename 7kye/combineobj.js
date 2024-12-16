// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

// function combine() {
//     // Your code here
// }

function combine(...objects) {
    // Create a new object to hold the combined results
    const combined = {};

    // Iterate over each input object
    for (const obj of objects) {
      // Iterate over each key in the current object
    for (const key in obj) {
        // If the key exists in the combined object, add the value
        if (combined.hasOwnProperty(key)) {
        combined[key] += obj[key];
        } else {
          // If the key doesn't exist, initialize it with the current value
        combined[key] = obj[key];
        }
    }
    }

    return combined;
}

  // Example usage:
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const result = combine(objA, objB); // Returns { a: 13, b: 20, c: 36, d: 3 }
console.log(result);