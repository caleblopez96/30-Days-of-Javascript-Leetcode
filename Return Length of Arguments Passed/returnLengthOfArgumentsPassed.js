// Write a function argumentsLength that returns the count of arguments passed to it.

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

function argumentsLength(...args) {
  return args.length;
}

console.log(argumentsLength(1, [], {})); // 3

/**
 * argumentsLength(1, 2, 3); // 3
 */

// Step by step:
// ...args is an array of arguments passed to the function.
// use the length property to get the length of the args array
