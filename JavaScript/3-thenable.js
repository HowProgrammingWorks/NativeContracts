'use strict';

const numbers = {
  then(onFulfilled, onRejected) {
    console.log({ onFulfilled, onRejected });
    const array = [1, 2, 3];
    onFulfilled(array);
    return numbers;
  },
};

const main = async () => {
  numbers.then(console.log);
  const res = await numbers;
  console.log({ res });
};

main();
