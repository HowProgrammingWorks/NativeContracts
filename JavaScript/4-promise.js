'use strict';

const main = async () => {
  const numbers = new Promise((resolve) => resolve([1, 2, 3]));
  const data = await numbers;
  console.log(data);
};

main();
