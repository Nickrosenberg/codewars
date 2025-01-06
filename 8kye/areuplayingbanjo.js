// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    // Check if the first character of the name is 'R' or 'r'
    if (name.charAt(0) === 'R' || name.charAt(0) === 'r') {
        return name + " plays banjo";
    } else {
        return name + " does not play banjo";
    }
}

// Example usage
console.log(areYouPlayingBanjo("Ringo")); // Output: Ringo plays banjo
console.log(areYouPlayingBanjo("John"));  // Output: John does not play banjo
console.log(areYouPlayingBanjo("rachel")); // Output: rachel plays banjo
console.log(areYouPlayingBanjo("Alice"));  // Output: Alice does not play banjo