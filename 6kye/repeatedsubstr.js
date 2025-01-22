// For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

// The input string consists of lowercase latin letters.

// Your function should return :

// a tuple (t, k) (in Python)
// an array [t, k] (in Ruby and JavaScript)
// in C, return k and write to the string t passed in parameter
// Examples:
// "ababab" ---> (t = "ab", k = 3)

// "abcde" ---> (t = "abcde", k = 1)
// because for this string, the minimum substring 't'
// such that 's' is 'k' times 't', is 's' itself.

function f(s) {
    const len = s.length;
    for (let i = 1; i <= len / 2; i++) {
        const t = s.substr(0, i);
        const k = len / t.length;
        if (t.repeat(k) === s) {
            return [t, k];
        }
    }
    return [s, 1]; // If no valid substring is found, return the string itself and k = 1.
}