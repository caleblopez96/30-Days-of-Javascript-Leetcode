//@ts-nocheck
// Write a function argumentsLength that returns the count of arguments passed to it.

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}

console.log(argumentsLength(1, () => x, {})); // 3
/**
 * argumentsLength(1, 2, 3); // 3
 */

// Step by step:
// ...args is an array of arguments passed to the function.
// use the length property to get the length of the args array
