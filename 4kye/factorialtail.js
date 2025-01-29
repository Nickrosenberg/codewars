// The problem
// How many zeroes are at the end of the factorial of 10? 10! = 3628800, i.e. there are 2 zeroes. 16! (or 0x10!) in hexadecimal would be 0x130777758000, which has 3 zeroes.

// Scalability
// Unfortunately, machine integer numbers has not enough precision for larger values. Floating point numbers drop the tail we need. We can fall back to arbitrary-precision ones - built-ins or from a library, but calculating the full product isn't an efficient way to find just the tail of a factorial. Calculating 100'000! in compiled language takes around 10 seconds. 1'000'000! would be around 10 minutes, even using efficient Karatsuba algorithm

// Your task
// is to write a function, which will find the number of zeroes at the end of (number) factorial in arbitrary radix = base for larger numbers.

// base is an integer from 2 to 256
// number is an integer from 1 to 1'000'000
// Note Second argument: number is always declared, passed and displayed as a regular decimal number. If you see a test described as 42! in base 20 it's 4210 not 4220 = 8210.

function zeroes(base, number) {
    function primeFactorization(b) {
        const factors = {};
        for (let i = 2; i * i <= b; i++) {
            while (b % i === 0) {
                if (!factors[i]) factors[i] = 0;
                factors[i]++;
                b /= i;
            }
        }
        if (b > 1) factors[b] = 1; // The remaining prime factor
        return factors;
    }

    function countFactorInFactorial(n, p) {
        let count = 0;
        let power = p;
        while (power <= n) {
            count += Math.floor(n / power);
            power *= p;
        }
        return count;
    }

    const factors = primeFactorization(base);
    let minZeros = Infinity;

    for (const [p, exp] of Object.entries(factors)) {
        const pInt = parseInt(p, 10);
        const count = countFactorInFactorial(number, pInt);
        minZeros = Math.min(minZeros, Math.floor(count / exp));
    }

    return minZeros;
}

// Example Usage
console.log(zeroes(10, 10));        // Output: 2
console.log(zeroes(16, 16));        // Output: 3
console.log(zeroes(20, 42));        // Example for a larger number and base
console.log(zeroes(256, 100000));   // A test with a large base and number