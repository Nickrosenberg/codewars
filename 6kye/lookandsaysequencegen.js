// The look and say sequence is a sequence in which each number is the result of a "look and say" operation on the previous element.

// Considering for example the classical version startin with "1": ["1", "11", "21, "1211", "111221", ...]. You can see that the second element describes the first as "1(times number)1", the third is "2(times number)1" describing the second, the fourth is "1(times number)2(and)1(times number)1" and so on.

// Your goal is to create a function which takes a starting string (not necessarily the classical "1", much less a single character start) and return the nth element of the series.

// Examples
//  "1",  1 --> "1"
//  "1",  3 --> "21"
//  "1",  5 --> "111221"
// "22", 10 --> "22"
// "14",  2 --> "1114"
// Trivia: "22" is the only element that can keep the series constant.

function lookAndSaySequence(firstElement, n) {
    let currentElement = firstElement;

    for (let i = 1; i < n; i++) {
        let nextElement = '';
        let count = 1;

        for (let j = 0; j < currentElement.length; j++) {
            // If the next character is the same, increment the count
            if (j < currentElement.length - 1 && currentElement[j] === currentElement[j + 1]) {
                count++;
            } else {
                // Otherwise, append the count and the character to the next element
                nextElement += count + currentElement[j];
                count = 1; // Reset count for the next character
            }
        }

        currentElement = nextElement; // Move to the next element in the sequence
    }

    return currentElement; // Return the nth element
}

// Example usage:
console.log(lookAndSaySequence("1", 1));  // Output: "1"
console.log(lookAndSaySequence("1", 3));  // Output: "21"
console.log(lookAndSaySequence("1", 5));  // Output: "111221"
console.log(lookAndSaySequence("22", 10)); // Output: "22"
console.log(lookAndSaySequence("14", 2));  // Output: "1114"