// // n this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// // Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// // Example:
// // move(3, 6) should equal 15

// function move (position, roll) {
//     // return the new position
// }

function move(position, roll) {
    // Validate the input values
    if (roll < 1 || roll > 6) {
    throw new Error("Roll must be a number between 1 and 6");
    }

    // Calculate the new position: current position + (roll * 2)
    const newPosition = position + (roll * 2);
    
    return newPosition;
}