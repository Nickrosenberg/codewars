// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// const stringToNumber = function(str){
//     // put your code here
//     return null;
// }

function stringToNumber(str) {
    // Using the Number constructor
    return Number(str);
    
    // Alternatively, you could use parseInt
    // return parseInt(str, 10);
    
    // Or the unary plus operator
    // return +str;
}

// Examples
console.log(stringToNumber("1234"));  // 1234
console.log(stringToNumber("605"));   // 605
console.log(stringToNumber("1405"));  // 1405
console.log(stringToNumber("-7"));    // -7