// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

// your referral bonus, and

// the price of a beer can

// For example:

// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

function beeramid(bonus, price) {
    let levels = 0; // To count the number of complete levels
    let totalCost = 0; // To keep track of the total cost

    // Continue building levels while we can afford the next level
    while (true) {
        levels++; // Move to the next level
        const cansNeeded = levels * levels; // Number of cans needed for the current level
        const costForLevel = cansNeeded * price; // Total cost for the current level

        // Check if we can afford this level
        if (totalCost + costForLevel > bonus) {
            break; // If we can't afford it, stop
        }

        totalCost += costForLevel; // Add the cost of this level to the total cost
    }

    return levels - 1; // Return the number of complete levels (subtract 1 because we incremented one extra level)
}

// Example usage:
console.log(beeramid(1500, 2)); // should return 12
console.log(beeramid(5000, 3)); // should return 16