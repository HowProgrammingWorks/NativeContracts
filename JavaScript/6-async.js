'use strict';

const DONE = { done: true, value: undefined };

const iterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    const iterator = {
      async next() {
        return {
          value: i++,
          done: i > 3,
        };
      },

      async throw(error) {
        console.log('throws:', error.message);
        return DONE;
      },

      async return(value) {
        console.log('returns', value);
        return DONE;
      },
    };
    return iterator;
  },
};

const fn = async () => {
  for await (const value of iterable) {
    console.log({ value });
    throw new Error('Hello');
    //return;
    //break;
  }
};

fn();
