// Let's take an integer number,  start and let's do the iterative process described below:

// we take its digits and raise each of them to a certain power, n, and add all those values up. (result = r1)

// we repeat the same process with the value r1 and so on, k times.

// Let's do it with start = 420, n = 3, k = 5

// 420 ---> 72 (= 4³ + 2³ + 0³) ---> 351 (= 7³ + 2³) ---> 153 ---> 153 ----> 153
// We can observe that it took 3 steps to reach a cyclical pattern [153](h = 3). The length of this cyclical pattern is 1, patt_len. The last term of our k operations is 153, last_term

// Now, start = 420, n = 4, k = 30

// 420 ---> 272 ---> 2433 ---> 434 ---> 593 ---> 7267 --->
// 6114 ---> 1554 ---> 1507 ---> 3027 ---> 2498 ---> 10929 --->
// 13139 ---> 6725 ---> 4338 ---> 4514 ---> 1138 ---> 4179 ---> 9219 ---> 
// 13139 ---> 6725 ---> 4338 ---> 4514 ---> 1138 ---> 4179 ---> 9219 ---> 
// 13139 ---> 6725 ---> 4338 ---> 4514 ---> 1138 ---> 4179 ---> 9219......
// In this example we can observe that the cyclical pattern (cyc_patt_arr) is [13139, 6725, 4338, 4514, 1138, 4179, 9219] with a length of 7, (patt_len = 7), and it took 12 steps (h = 12) to reach the cyclical pattern. The last term after doing 30 operations is 1138

// Make the function sum_pow_dig_seq(), that receives the arguments in the order shown below with the corresponding output:

// sum_pow_dig_seq(start, n, k) ---> [h, cyc_patt_arr, patt_len, last_term]
// For our given examples,

// sum_pow_dig_seq(420, 3, 5) == [3, [153], 1, 153]

// sum_pow_dig_seq(420, 4, 30) == [12, [13139, 6725, 4338, 4514, 1138, 4179, 9219], 7, 1138]
// Constraints for tests:

// 500 ≤ start ≤ 8000
// 2 ≤ n ≤ 9
// 100 * n ≤ k ≤ 200 * n

function sumPowDigSeq(start, n, k) {
    let sequence = [start]; // Store the sequence of numbers
    let seen = new Map();   // Map to store the first occurrence of each number
    seen.set(start, 0);     // Initialize with the starting number

    let h = 0;              // Step count when the cycle starts
    let cyc_patt_arr = [];  // Cyclical pattern array
    let patt_len = 0;       // Length of the cyclical pattern
    let last_term = start;  // Last term after k steps

    for (let i = 1; i <= k; i++) {
        // Compute the next number in the sequence
        let nextNum = String(last_term)
            .split('')
            .reduce((sum, digit) => sum + Math.pow(Number(digit), n), 0);

        // Check if the number has been seen before
        if (seen.has(nextNum)) {
            // Cycle detected
            h = seen.get(nextNum); // Step when the cycle starts
            cyc_patt_arr = sequence.slice(h); // Extract the cyclical pattern
            patt_len = cyc_patt_arr.length;   // Length of the cycle

            // Calculate the last term after k steps
            let cycleIndex = (k - h) % patt_len;
            last_term = cyc_patt_arr[cycleIndex];
            break;
        }

        // Add the new number to the sequence and seen map
        sequence.push(nextNum);
        seen.set(nextNum, i);
        last_term = nextNum;
    }

    // If no cycle is detected within k steps, return the last term
    if (cyc_patt_arr.length === 0) {
        cyc_patt_arr = [last_term];
        patt_len = 1;
    }

    return [h, cyc_patt_arr, patt_len, last_term];
}

// Example usage:
console.log(sumPowDigSeq(420, 3, 5)); // [3, [153], 1, 153]
console.log(sumPowDigSeq(420, 4, 30)); // [12, [13139, 6725, 4338, 4514, 1138, 4179, 9219], 7, 1138]