A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

function solution(list) {
    if (list.length === 0) return '';

    let result = [];
    let start = list[0];
    let prev = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i] === prev + 1) {
            // Continue the sequence
            prev = list[i];
        } else {
            // End of sequence
            if (start === prev) {
                // Single number
                result.push(start.toString());
            } else if (prev - start >= 2) {
                // Range of at least 3 numbers
                result.push(`${start}-${prev}`);
            } else {
                // Two consecutive numbers (not a range)
                result.push(start.toString());
                result.push(prev.toString());
            }
            // Start a new sequence
            start = list[i];
            prev = list[i];
        }
    }

    // Handle the last sequence
    if (start === prev) {
        result.push(start.toString());
    } else if (prev - start >= 2) {
        result.push(`${start}-${prev}`);
    } else {
        result.push(start.toString());
        result.push(prev.toString());
    }

    return result.join(',');
}