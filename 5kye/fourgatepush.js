// You are working hard on your Protoss builds in StarCraft II, especially the 4 Gate Push. You've come upon a tough problem, however, which is how to determine the distribution of zealots, stalkers, and sentries to maximize your army strength. Recall (although you should already know!) that zealots cost 100 minerals and no gas, stalkers cost 125 minerals and 50 gas, and sentries cost 50 minerals and 100 gas. Given your current economy and how much each unit increases your army strength, determine the maximum army strength you can obtain.

// #Input The fourgate function should accept 5 integers M (0 ≤ M ≤ 50,000), the amount of minerals you have, G (0 ≤ G ≤ 50,000), the amount of gas you have, Z (0 ≤ Z ≤ 1,000), the strength of a zealot in your army, S (0 ≤ S ≤ 1,000), the strength of a stalker in your army, and E (0 ≤ E ≤ 1,000), the strength of a sentry in your army, respectfully.

// #Output For each case, return the maximum army strength you can obtain.

// #Sample Input

// fourgate(500, 400, 10, 20, 15);

// #Sample output

// 95

function fourgate(M, G, Z, S, E) {
    let maxStrength = 0;

    for (let zealots = 0; zealots <= M / 100; zealots++) {
        for (let stalkers = 0; stalkers <= Math.floor((M - 100 * zealots) / 125); stalkers++) {
            for (let sentries = 0; sentries <= Math.floor((M - 100 * zealots - 125 * stalkers) / 50); sentries++) {
                // Calculate gas requirement
                const gasRequired = 50 * stalkers + 100 * sentries;
                
                // Check if we exceed gas limits
                if (gasRequired <= G) {
                    // Calculate current army strength
                    const currentStrength = (zealots * Z) + (stalkers * S) + (sentries * E);
                    
                    // Update maximum strength if current strength is greater
                    maxStrength = Math.max(maxStrength, currentStrength);
                }
            }
        }
    }

    return maxStrength;
}

// Sample Input
console.log(fourgate(500, 400, 10, 20, 15)); // Output: 95