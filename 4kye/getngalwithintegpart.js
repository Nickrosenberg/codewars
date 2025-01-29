// In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition.

// For example, 4 can be partitioned in five distinct ways:

// 4, 3 + 1, 2 + 2, 2 + 1 + 1, 1 + 1 + 1 + 1.

// We can write:

// enum(4) -> [[4],[3,1],[2,2],[2,1,1],[1,1,1,1]] and

// enum(5) -> [[5],[4,1],[3,2],[3,1,1],[2,2,1],[2,1,1,1],[1,1,1,1,1]].

// The number of parts in a partition grows very fast. For n = 50 number of parts is 204226, for 80 it is 15,796,476 It would be too long to tests answers with arrays of such size. So our task is the following:

// 1 - n being given (n integer, 1 <= n <= 50) calculate enum(n) ie the partition of n. We will obtain something like that:
// enum(n) -> [[n],[n-1,1],[n-2,2],...,[1,1,...,1]] (order of array and sub-arrays doesn't matter). This part is not tested.

// 2 - For each sub-array of enum(n) calculate its product. If n = 5 we'll obtain after removing duplicates and sorting:

// prod(5) -> [1,2,3,4,5,6]

// prod(8) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 16, 18]

// If n = 40 prod(n) has a length of 2699 hence the tests will not verify such arrays. Instead our task number 3 is:

// 3 - return the range, the average and the median of prod(n) in the following form (example for n = 5):

// "Range: 5 Average: 3.50 Median: 3.50"

// Range is an integer, Average and Median are float numbers rounded to two decimal places (".2f" in some languages).

// Notes:
// Range : difference between the highest and lowest values.

// Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.

// Median : The median is the number separating the higher half of a data sample from the lower half. (https://en.wikipedia.org/wiki/Median)

// Hints:
// Try to optimize your program to avoid timing out.

// Memoization can be helpful but it is not mandatory for being successful.

function part(n) {
    const partitions = [];

    // Function to generate partitions recursively
    function generatePartitions(num, max, current) {
        if (num === 0) {
            partitions.push(current.slice());
            return;
        }
        for (let i = Math.min(num, max); i > 0; i--) {
            current.push(i);
            generatePartitions(num - i, i, current);
            current.pop();
        }
    }

    // Generate all partitions of n
    generatePartitions(n, n, []);

    const productsSet = new Set();

    // Calculate the product for each partition
    partitions.forEach(partition => {
        const product = partition.reduce((acc, val) => acc * val, 1);
        productsSet.add(product);
    });

    const products = Array.from(productsSet).sort((a, b) => a - b);

    // Calculate Range
    const range = products[products.length - 1] - products[0];

    // Calculate Average
    const average = products.reduce((acc, val) => acc + val, 0) / products.length;

    // Calculate Median
    let median;
    if (products.length % 2 === 0) {
        const mid1 = products[products.length / 2 - 1];
        const mid2 = products[products.length / 2];
        median = (mid1 + mid2) / 2;
    } else {
        median = products[Math.floor(products.length / 2)];
    }

    // Return the formatted result
    return `Range: ${range} Average: ${average.toFixed(2)} Median: ${median.toFixed(2)}`;
}

// Example usage
console.log(part(5)); // Outputs: "Range: 5 Average: 3.50 Median: 3.50"