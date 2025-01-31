// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    // Create a new array to hold non-zero elements
    const result = [];
    
    // Count the number of zeros
    let zeroCount = 0;

    // Iterate through the original array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            // Increment the zero count if the element is zero
            zeroCount++;
        } else {
            // Push non-zero elements to the result array
            result.push(arr[i]);
        }
    }

    // Add the zeros to the end of the result array
    for (let i = 0; i < zeroCount; i++) {
        result.push(0);
    }

    return result;
}

// Example usage
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns [false, 1, 1, 2, 1, 3, "a", 0, 0]