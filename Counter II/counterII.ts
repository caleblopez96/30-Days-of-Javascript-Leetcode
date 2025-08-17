/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounterIITS(init: number): Counter {
  let current = init;

  return {
    increment: () => {
      current++;
      return current;
    },
    decrement: () => {
      current--;
      return current;
    },
    reset: () => {
      current = init;
      return current;
    },
  };
}

/**
 * const counter = createCounterIITS(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
