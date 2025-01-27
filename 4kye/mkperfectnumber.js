// A generalization of perfect numbers are (m,k)-perfect number. It is a series of numbers that satisfy the following condition:

// σ
// m
// (
// n
// )
// =
// k
// n
// σ 
// m
//  (n)=kn
// where σm is the divisor function (or sum of all divisors) [Wikipedia link] applied m times, k a constant.

// For example "normal" perfect numbers are (1,2)-perfect number.

// Goal:
// Write a function first_mk_perfectnumber(m,k) that, give in input the m and k of the previous equation ( σm(n) = kn ) , it returns the first number (n) that satisfy the relation.

// Pay attention to the performance of your algorithm!! This function must run within the maximum time very big number (>200000). My solution's time of execution in any language is around 4 seconds.

// Wikipedia Page : Superperfect Number [Generalization at bottom]

// Example:
// first_mk_perfectnumber(2,2) return 2 because
// σ(σ(1)) = 1 so 1 != 2*1 while σ(σ(2)) = 4 so 4 == 2*2

function sigma(n) {
    let sum = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i; // i is a divisor
            if (i !== n / i) {
                sum += n / i; // n / i is also a divisor
            }
        }
    }
    return sum;
}

function first_mk_perfectnumber(m, k) {
    let n = 1; // Start checking from 1
    while (true) {
        let current = n;
        for (let i = 0; i < m; i++) {
            current = sigma(current); // Apply σ function m times
        }
        if (current === k * n) {
            return n; // Return the first n that satisfies the condition
        }
        n++; // Increment n to check the next number
    }
}

// Example usage:
console.log(first_mk_perfectnumber(2, 2)); // Output: 2