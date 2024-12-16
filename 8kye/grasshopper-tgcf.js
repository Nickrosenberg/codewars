// // Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

// function combat(health, damage) {
//     // Write your code here
// }

function combat(health, damage) {
    // Calculate the new health by subtracting damage from current health
    const newHealth = health - damage;

    // Health cannot be less than 0, so we return the maximum of 0 or newHealth
    return Math.max(0, newHealth);
}