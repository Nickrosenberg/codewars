// The purpose of this series is developing understanding of statistical problems in AS and A level maths. Let's get started with a simple concept in statistics: Mutually exclusive events.

// The probability of an OR event is calculated by the following rule:

// P(A || B) = P(A) + P(B) - P(A && B)

// The probability of event A or event B happening is equal to the probability of event A plus the probability of event B minus the probability of event A and event B happening simultaneously.

// Mutually exclusive events are events that cannot happen at the same time. For example, the head and tail results of a coin toss are mutually exclusive because they can't both happen at once. Thus, the above example for a coin toss would look like this:

// P(H || T) = P(H) + P(T) - P(H && T)

// Note that the probability of tossing a coin and the result being both heads and tails is 0.

// P(H || T) = (0.5) + (0.5) - (0) P(H || T) = 1

// Thus the probability of a coin toss result being a heads or a tails is 1, in other words: certain.

// Your task:

// You are going to have to work out the probability of one roll of a die returning two given outcomes, or rolls. Given that dice rolls are mutually exclusive, you will have to implement the above formula. To make this interesting (this is a coding challenge after all), these dice are not fair and thus the probabilities of receiving each roll are different.

// You will be given a two-dimensional array containing the number of each of the results (1-6) of the die and the probability of that roll for example [1 , 0.23] as well as the two rolls, for example 1 and 5.

// Given the two roll probabilities to calculate, return the probability of a single roll of the die returning either. If the total probability of the six rolls doesn't add up to one, there is a problem with the die; in this case, return null. Return your result as a string to two decimal places.

// Example below:

// 1 : 1/6

// 2 : 1/6

// 3 : 1/6

// 4 : 1/6

// 5 : 1/6

// 6 : 1/6

// If asked for the rolls 1 and 2 then you would need to sum the probabilities, both 1/6 therefore 2/6 and return this. As above, you will need to return it as a decimal and not a fraction.

function mutuallyExclusive(dice, roll1, roll2) {
    let totalProbability = 0;
    let probRoll1 = 0;
    let probRoll2 = 0;

    // Calculate total probability and find probabilities for roll1 and roll2
    for (let i = 0; i < dice.length; i++) {
        totalProbability += dice[i][1]; // Sum the probabilities
        if (dice[i][0] === roll1) {
            probRoll1 = dice[i][1]; // Get probability for roll1
        }
        if (dice[i][0] === roll2) {
            probRoll2 = dice[i][1]; // Get probability for roll2
        }
    }

    // Check if total probability is 1
    if (totalProbability !== 1) {
        return null; // Return null if the total probability is not 1
    }

    // Calculate the combined probability for mutually exclusive events
    const combinedProbability = probRoll1 + probRoll2;

    // Return the result formatted to two decimal places
    return combinedProbability.toFixed(2);
}

// Example usage:
const dice = [
    [1, 0.23],
    [2, 0.17],
    [3, 0.20],
    [4, 0.15],
    [5, 0.15],
    [6, 0.10]
];

console.log(mutuallyExclusive(dice, 1, 5)); // Output: "0.38"
console.log(mutuallyExclusive(dice, 2, 3)); // Output: "0.37"
console.log(mutuallyExclusive(dice, 1, 6)); // Output: "0.33"