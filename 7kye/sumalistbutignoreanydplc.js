// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

function sumNoDuplicates(numList) {
    const frequencyMap = {};
    
    // Count the frequency of each number in the list
    numList.forEach(num => {
    if (frequencyMap[num]) {
        frequencyMap[num]++;
    } else {
        frequencyMap[num] = 1;
    }
    });

    // Sum only the numbers that occur exactly once
    let sum = 0;
    for (const num in frequencyMap) {
    if (frequencyMap[num] === 1) {
        sum += Number(num);
    }
    }
    
    return sum;
}

  // Example usage:
  console.log(sumNoDuplicates([3, 4, 3, 6])); // Output: 10
  console.log(sumNoDuplicates([1, 10, 3, 10, 10])); // Output: 4