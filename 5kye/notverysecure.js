// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string) {
    // Use a regular expression to check if the string is alphanumeric
    // ^ asserts the start of the string
    // [a-zA-Z0-9] matches any uppercase/lowercase letter or digit
    // + ensures there is at least one character
    // $ asserts the end of the string
    return /^[a-zA-Z0-9]+$/.test(string);
}

  // Example usage:
  console.log(alphanumeric("abc123")); // true
  console.log(alphanumeric("ABC123")); // true
  console.log(alphanumeric("abc123_")); // false (contains underscore)
  console.log(alphanumeric("abc 123")); // false (contains whitespace)
  console.log(alphanumeric("")); // false (empty string)
  console.log(alphanumeric("123")); // true
  console.log(alphanumeric("abc")); // true
  console.log(alphanumeric(" ")); // false (whitespace)
  console.log(alphanumeric("!@#")); // false (special characters)