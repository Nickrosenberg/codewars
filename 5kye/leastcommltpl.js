// Write a function that calculates the least common multiple of its arguments; each argument is assumed to be a non-negative integer. In the case that there are no arguments (or the provided array in compiled languages is empty), return 1. If any argument is 0, return 0.

var gcd = function(a, b) {
    while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
    }
    return a;
};

var lcm = function (...args) {
    if (args.length === 0) return 1;
    if (args.includes(0)) return 0;

    const lcmTwoNumbers = (a, b) => (a * b) / gcd(a, b);

    return args.reduce((accumulatedLcm, current) => lcmTwoNumbers(accumulatedLcm, current), 1);
};

 // Example usages:
console.log(lcm()); // returns 1
console.log(lcm(0, 5, 10)); // returns 0
console.log(lcm(5, 10, 15)); // returns 30