// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

function snail(array) {
    if (array.length === 0 || array[0].length === 0) return [];

    let result = [];
    let topRow = 0, bottomRow = array.length - 1;
    let leftCol = 0, rightCol = array[0].length - 1;

    while (topRow <= bottomRow && leftCol <= rightCol) {
      // Traverse from left to right along the top row
    for (let i = leftCol; i <= rightCol; i++) {
        result.push(array[topRow][i]);
    }
    topRow++;

      // Traverse from top to bottom along the right column
    for (let i = topRow; i <= bottomRow; i++) {
        result.push(array[i][rightCol]);
    }
    rightCol--;

    if (topRow <= bottomRow) {
        // Traverse from right to left along the bottom row
        for (let i = rightCol; i >= leftCol; i--) {
        result.push(array[bottomRow][i]);
        }
        bottomRow--;
    }

    if (leftCol <= rightCol) {
        // Traverse from bottom to top along the left column
        for (let i = bottomRow; i >= topRow; i--) {
        result.push(array[i][leftCol]);
        }
        leftCol++;
    }
    }

    return result;
}

  // Example usage:
const array1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
  console.log(snail(array1)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

const array2 = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
];
  console.log(snail(array2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const emptyArray = [[]];
console.log(snail(emptyArray)); // Output: []