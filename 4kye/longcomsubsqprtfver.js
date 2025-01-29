// Task
// Write a function lcs that accepts two strings and returns their longest common subsequence as a string. Performance matters.

// Examples
// lcs( "abcdef", "abc" ) => "abc"
// lcs( "abcdef", "acf" ) => "acf"
// lcs( "132535365", "123456789" ) => "12356"
// lcs( "abcdefghijklmnopq", "apcdefghijklmnobq" ) => "acdefghijklmnoq"
// Testing
// This is a performance version of xDranik's kata of the same name.
// This kata, however, has much more full and heavy testing. Intermediate random tests have string arguments of 20 characters; hard random tests 40 characters; extreme 60 characters (characters are chosen out of 36 different ones).

// The reference algorithm solves all (12 fixed, 72 intermediate, 24 hard, 12 extreme) tests within ~150ms. The example algorithm without memoisation would take ~15000ms.

// Notes
// The subsequences of "abc" are "", "a", "b", "c", "ab", "ac", "bc", "abc".
// "" is a valid subsequence in this kata, and a possible return value.
// All inputs will be valid.
// Two strings may have more than one longest common subsequence. When this occurs, return any of them.

// lcs( string0, string1 ) === lcs( string1, string0 )

function lcs(x, y) {
    const m = x.length;
    const n = y.length;
    
    // Create a 2D array to store lengths of longest common subsequence
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Fill the dp array
    for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
        if (x[i - 1] === y[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    }

    // Backtrack to find the longest common subsequence
    let i = m;
    let j = n;
    let lcsStr = "";
    while (i > 0 && j > 0) {
    if (x[i - 1] === y[j - 1]) {
        lcsStr = x[i - 1] + lcsStr; // Build LCS string
        i--;
        j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
        i--;
    } else {
        j--;
    }
    }

    return lcsStr;
}

  // Example usage:
  console.log(lcs("abcdef", "abc")); // "abc"
  console.log(lcs("abcdef", "acf")); // "acf"
  console.log(lcs("132535365", "123456789")); // "12356"
  console.log(lcs("abcdefghijklmnopq", "apcdefghijklmnobq")); // "acdefghijklmnobq"