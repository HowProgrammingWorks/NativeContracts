'use strict';

const URL = 'https://developer.mozilla.org/';

const main = async () => {
  const response = await fetch(URL);
  const { body } = response;
  let total = 0;

  for await (const chunk of body) {
    const name = chunk.constructor.name;
    const { length } = chunk;
    total += length;
    console.log(`Chunk: ${name}, Length: ${length}`);
  }

  console.log(`Total length: ${total} bytes`);
};

main();
