'use strict';

const generator = async function* () {
  let i = 0;
  try {
    while (i <= 3) {
      yield i++;
    }
  } catch (error) {
    console.log('throws:', error.message);
  } finally {
    console.log('returns');
  }
};

const fn = async () => {
  const iterable = generator();
  for await (const value of iterable) {
    console.log({ value });
    iterable.throw(new Error('Hello'));
    //return;
    //break;
  }
};

fn();
