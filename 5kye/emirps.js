// If you reverse the word "emirp" you will have the word "prime". That idea is related with the purpose of this kata: we should select all the primes that when reversed are a different prime (so palindromic primes should be discarded).

// For example: 13, 17 are prime numbers and the reversed respectively are 31, 71 which are also primes, so 13 and 17 are "emirps". But primes 757, 787, 797 are palindromic primes, meaning that the reversed number is the same as the original, so they are not considered as "emirps" and should be discarded.

// The emirps sequence is registered in OEIS as A006567

// Your task
// Create a function that receives one argument n, as an upper limit, and the return the following array:

// [number_of_emirps_below_n, largest_emirp_below_n, sum_of_emirps_below_n]

// Examples
// find_emirp(10)
// [0, 0, 0] ''' no emirps below 10 '''

// find_emirp(50)
// [4, 37, 98] ''' there are 4 emirps below 50: 13, 17, 31, 37; largest = 37; sum = 98 '''

// find_emirp(100)
// [8, 97, 418] ''' there are 8 emirps below 100: 13, 17, 31, 37, 71, 73, 79, 97; largest = 97; sum = 418 '''

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

function findEmirp(n) {
    let emirps = [];

    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            let reversed = reverseNumber(i);
            if (reversed !== i && isPrime(reversed)) {
                emirps.push(i);
            }
        }
    }

    const numberOfEmirps = emirps.length;
    const largestEmirp = numberOfEmirps > 0 ? Math.max(...emirps) : 0;
    const sumOfEmirps = emirps.reduce((sum, num) => sum + num, 0);

    return [numberOfEmirps, largestEmirp, sumOfEmirps];
}

// Example usage:
console.log(findEmirp(10));  // [0, 0, 0]
console.log(findEmirp(50));  // [4, 37, 98]
console.log(findEmirp(100)); // [8, 97, 418]