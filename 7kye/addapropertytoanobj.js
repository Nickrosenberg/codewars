// Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.

// function addProperty(obj, prop, value) {
//     // Add your code here
// }

function addProperty(obj, prop, value) {
    // Check if the property already exists on the object
    if (obj.hasOwnProperty(prop)) {
        throw new Error(`Property '${prop}' already exists on the object.`);
    }

    // Add the new property to the object
    obj[prop] = value;
}

// Example usage:
const myObject = {};

try {
    addProperty(myObject, 'name', 'Alice');
    console.log(myObject); // { name: 'Alice' }

    addProperty(myObject, 'age', 30);
    console.log(myObject); // { name: 'Alice', age: 30 }

    // This will throw an error because 'name' already exists
    addProperty(myObject, 'name', 'Bob');
} catch (e) {
    console.error(e.message); // Property 'name' already exists on the object.
}