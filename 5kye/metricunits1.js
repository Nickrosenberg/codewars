// Scientists working internationally use metric units almost exclusively. Unless that is, they wish to crash multimillion dollars worth of equipment on Mars.

// Your task is to write a simple function that takes a number of meters, and outputs it using metric prefixes.

// In practice, meters are only measured in "mm" (thousandths of a meter), "cm" (hundredths of a meter), "m" (meters) and "km" (kilometers, or clicks for the US military).

// For this exercise we just want units bigger than a meter, from meters up to yottameters, excluding decameters and hectometers.

// All values passed in will be positive integers. e.g.

// 999 --> "999m"
// 123456 --> "123.456km"
// 12300000 --> "12.3Mm"

function meters(x) {
    if (x < 1000) {
        return x + "m";
    } else if (x < 1e6) { // Less than a megameter
        return (x / 1000).toFixed(3).replace(/\.?0+$/, '') + "km"; // format to km
    } else if (x < 1e9) { // Less than a gigameter
        return (x / 1e6).toFixed(3).replace(/\.?0+$/, '') + "Mm"; // format to Mm
    } else if (x < 1e12) { // Less than a terameter
        return (x / 1e9).toFixed(3).replace(/\.?0+$/, '') + "Gm"; // format to Gm
    } else if (x < 1e15) { // Less than a petameter
        return (x / 1e12).toFixed(3).replace(/\.?0+$/, '') + "Tm"; // format to Tm
    } else if (x < 1e18) { // Less than an exameter
        return (x / 1e15).toFixed(3).replace(/\.?0+$/, '') + "Pm"; // format to Pm
    } else if (x < 1e21) { // Less than a zettameter
        return (x / 1e18).toFixed(3).replace(/\.?0+$/, '') + "Em"; // format to Em
    } else if (x < 1e24) { // Less than a yottameter
        return (x / 1e21).toFixed(3).replace(/\.?0+$/, '') + "Zm"; // format to Zm
    } else {
        return (x / 1e24).toFixed(3).replace(/\.?0+$/, '') + "Ym"; // format to Ym
    }
}

// Examples:
console.log(meters(999));        // Output: "999m"
console.log(meters(123456));     // Output: "123.456km"
console.log(meters(12300000));   // Output: "12.3Mm"
console.log(meters(5000000000)); // Output: "5Gm"
console.log(meters(10000000000000)); // Output: "10Tm"