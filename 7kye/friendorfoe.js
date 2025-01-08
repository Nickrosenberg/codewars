// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []
// Input strings will only contain letters.
// Note: keep the original order of the names in the output.

function friend(friends) {
    // Use the filter method to iterate over the friends array
    return friends.filter(name => name.length === 4);
}

  // Examples:
  console.log(friend(["Ryan", "Kieran", "Jason", "Yous"])); // Output: ["Ryan", "Yous"]
  console.log(friend(["Peter", "Stephen", "Joe"])); // Output: []
  console.log(friend(["Tom", "John", "Dane"])); // Output: []
  console.log(friend(["Anna", "Mike", "Sara", "Omar"])); // Output: ["Omar"]