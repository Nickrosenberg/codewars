// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// function getAge(inputString){
//     // return the girl's correct age as an integer. Happy coding :) 
//     }

function getAge(inputString) {
    // The first character of the string is the age as a character
    return parseInt(inputString[0], 10); // Convert the character to an integer
}

// Test cases
console.log(getAge("1 year old")); // 1
console.log(getAge("5 years old")); // 5
console.log(getAge("0 years old")); // 0
console.log(getAge("9 years old")); // 9

