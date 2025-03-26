// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(text, markers) {
    return text.split('\n').map(line => {
        let minIndex = line.length;
        for (const marker of markers) {
            const index = line.indexOf(marker);
            if (index !== -1 && index < minIndex) {
                minIndex = index;
            }
        }
        const strippedLine = minIndex !== line.length ? line.substring(0, minIndex) : line;
        return strippedLine.trimEnd();
    }).join('\n');
}