// If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

// Usage example:

// var complexFunction = function(arg1, arg2) { /* complex calculation in here */ };
// var cachedFunction = cache(complexFunction);

// cachedFunction('foo', 'bar'); // complex function should be executed
// cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
// cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments

function cache(func) {
    // Create a cache object to store results
    const cacheStore = new Map();

    return function(...args) {
      // Create a unique key for the arguments
    const key = JSON.stringify(args);

      // Check if the result is already cached
    if (cacheStore.has(key)) {
        // Return the cached result
        return cacheStore.get(key);
    }

    const result = func(...args);

      // Store the result in the cache
    cacheStore.set(key, result);

      // Return the result
    return result;
    };
}

  // Example usage
var complexFunction = function(arg1, arg2) {
    // Simulate a complex calculation
    console.log(`Calculating for ${arg1} and ${arg2}`);
    return `${arg1}-${arg2}`;
};

var cachedFunction = cache(complexFunction);

console.log(cachedFunction('foo', 'bar')); // complex function should be executed
console.log(cachedFunction('foo', 'bar')); // cached result should be returned
console.log(cachedFunction('foo', 'baz')); // should be executed, because the method wasn't invoked before with these arguments