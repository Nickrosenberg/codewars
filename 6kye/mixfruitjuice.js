// Jumbo Juice makes a fresh juice out of fruits of your choice.Jumbo Juice charges $5 for regular fruits and $7 for special ones. Regular fruits are Banana, Orange, Apple, Lemon and Grapes. Special ones are Avocado, Strawberry and Mango. Others fruits that are not listed are also available upon request. Those extra special fruits cost $9 per each. There is no limit on how many fruits she/he picks.The price of a cup of juice is the mean of price of chosen fruits. In case of decimal number (ex. $5.99), output should be the nearest integer (use the standard rounding function of your language of choice).

// Input
// The function will receive an array of strings, each with the name of a fruit. The recognition of names should be case insensitive. There is no case of an empty array input.

// Example
// ['Mango', 'Banana', 'Avocado'] //the price of this juice bottle is (7+5+7)/3 = $6($6.333333...) 

function mixFruit(arr) {
    // Define the fruit prices
    const prices = {
        regular: 5, // Regular fruits
        special: 7, // Special fruits
        extraSpecial: 9 // Extra special fruits
    };

    // Define sets for fruit categories
    const regularFruits = new Set(['banana', 'orange', 'apple', 'lemon', 'grapes']);
    const specialFruits = new Set(['avocado', 'strawberry', 'mango']);
    
    let totalPrice = 0;
    let count = 0;

    // Iterate over the array of fruits
    arr.forEach(fruit => {
        const lowerCaseFruit = fruit.toLowerCase(); // Normalize case

        if (regularFruits.has(lowerCaseFruit)) {
            totalPrice += prices.regular;
            count++;
        } else if (specialFruits.has(lowerCaseFruit)) {
            totalPrice += prices.special;
            count++;
        } else {
            // If the fruit is not regular or special, it's extra special
            totalPrice += prices.extraSpecial;
            count++;
        }
    });

    // Calculate the mean price
    const meanPrice = totalPrice / count;

    // Return the rounded value as the final price
    return Math.round(meanPrice);
}

// Example usage:
console.log(mixFruit(['Mango', 'Banana', 'Avocado'])); // Output: 6
console.log(mixFruit(['Grapes', 'Strawberry', 'Apple', 'Watermelon'])); // Output: 7