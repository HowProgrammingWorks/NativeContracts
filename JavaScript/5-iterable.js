'use strict';

const DONE = { done: true, value: undefined };

const iterable = {
  [Symbol.iterator]() {
    let i = 0;
    const iterator = {
      next() {
        return {
          value: i++,
          done: i > 3,
        };
      },

      throw(error) {
        console.log('threows: ', error.message);
        return DONE;
      },

      return(value) {
        console.log('returns', value);
        return DONE;
      },
    };
    return iterator;
  },
};

const fn = () => {
  for (const value of iterable) {
    console.log({ value });
    //throw new Error('Hello');
    //return;
    break;
  }
};

fn();
