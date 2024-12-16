// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// function highAndLow(numbers){
//     // ...
// }

function highAndLow(numbers) {
    // Split the string into an array of number strings, then map to convert them to numbers
    const numArray = numbers.split(' ').map(Number);
    
    // Find the highest and lowest numbers using Math.max and Math.min
    const highest = Math.max(...numArray);
    const lowest = Math.min(...numArray);
    
    // Return the result as a string with the highest number first
    return `${highest} ${lowest}`;
}