// In this Kata, you will be given boolean values and boolean operators. Your task will be to return the number of arrangements that evaluate to True.

// t,f will stand for true, false and the operators will be Boolean AND (&), OR (|), and XOR (^).

// For example, solve("tft","^&") = 2, as follows:

// "((t ^ f) & t)" = True
// "(t ^ (f & t))" = True
// Notice that the order of the boolean values and operators does not change. What changes is the position of braces.

// More examples in the test cases.

function solve(s, ops) {
    const n = s.length;
    
    // DP tables
    const dpTrue = Array(n).fill(null).map(() => Array(n).fill(0));
    const dpFalse = Array(n).fill(null).map(() => Array(n).fill(0));

    // Initialize base cases
    for (let i = 0; i < n; i++) {
        if (s[i] === 't') {
            dpTrue[i][i] = 1;
        } else if (s[i] === 'f') {
            dpFalse[i][i] = 1;
        }
    }

    // Fill DP tables
    for (let len = 2; len <= n; len++) { // length of the subexpression
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1; // end of subexpression
            for (let k = 0; k < len - 1; k++) { // operator index
                const op = ops[i + k];

                const leftTrue = dpTrue[i][i + k];
                const rightTrue = dpTrue[i + k + 1][j];
                const leftFalse = dpFalse[i][i + k];
                const rightFalse = dpFalse[i + k + 1][j];

                // Evaluate based on the operator
                if (op === '&') {
                    dpTrue[i][j] += leftTrue * rightTrue;
                    dpFalse[i][j] += leftFalse * rightFalse + 
                                     leftTrue * rightFalse + 
                                     leftFalse * rightTrue;
                } else if (op === '|') {
                    dpTrue[i][j] += leftTrue * rightTrue + 
                                    leftTrue * rightFalse + 
                                    leftFalse * rightTrue;
                    dpFalse[i][j] += leftFalse * rightFalse;
                } else if (op === '^') {
                    dpTrue[i][j] += leftTrue * rightFalse + 
                                    leftFalse * rightTrue;
                    dpFalse[i][j] += leftTrue * rightTrue + 
                                     leftFalse * rightFalse;
                }
            }
        }
    }

    return dpTrue[0][n - 1]; // Total number of ways to get True from full expression
}

// Example use case:
console.log(solve("tft", "^&")); // Output: 2