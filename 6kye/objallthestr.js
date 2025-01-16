// String.prototype.hashify()
// that will turn a string into a hash/object. Every character in the string will be the key for the next character.
// E.g.

// '123456'.hashify() == {"1":"2","2":"3","3":"4","4":"5","5":"6","6":"1"} // The last char will be key for 1st
// char
// '11223'.hashify() == {"1":["1","2"],"2":["2","3"],"3":"1"} // when duplicates exist, group them in an array
// // i.e. 1 is key for next char 1, that 1 is key for next char 2, but 1 is already in the hash, so add 2 to key 1
// 'Codewars'.hashify() == {"C":"o","o":"d","d":"e","e":"w","w":"a","a":"r","r":"s","s":"C"}
// Order is not important
// There is a preloaded function equals(x,y) that will check if objects are same regardless of property order.

String.prototype.hashify = function () {
    // Create an empty object to hold the results
    const result = {};

    // Get the length of the string
    const len = this.length;

    // Loop through each character in the string
    for (let i = 0; i < len; i++) {
        const currentChar = this[i];
        const nextChar = this[(i + 1) % len]; // Circular reference
        
        // If currentChar already exists in the result object
        if (result.hasOwnProperty(currentChar)) {
            // If it is not already an array, convert it to an array
            if (!Array.isArray(result[currentChar])) {
                result[currentChar] = [result[currentChar]];
            }
            // Add the nextChar to the array
            result[currentChar].push(nextChar);
        } else {
            // Assign nextChar as the value
            result[currentChar] = nextChar;
        }
    }
    
    return result;
};

// Example usage
console.log('123456'.hashify()); // {"1":"2","2":"3","3":"4","4":"5","5":"6","6":"1"}
console.log('11223'.hashify()); // {"1":["1","2"],"2":["2","3"],"3":"1"}
console.log('Codewars'.hashify()); // {"C":"o","o":"d","d":"e","e":"w","w":"a","a":"r","r":"s","s":"C"}