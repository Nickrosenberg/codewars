// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
    // Calculate hours, minutes, and seconds
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    // Format the time components to be two digits
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(secs).padStart(2, '0');

    // Return the formatted time
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Example usage:
console.log(humanReadable(3661)); // Output: "01:01:01"
console.log(humanReadable(59));   // Output: "00:00:59"
console.log(humanReadable(3600)); // Output: "01:00:00"
console.log(humanReadable(359999)); // Output: "99:59:59"