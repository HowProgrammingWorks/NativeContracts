'use strict';

const fs = require('node:fs');

// Callback-last-error-first

const callback = (error, data) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log(data);
  }
};

fs.readFile('1-callback.js', 'utf8', callback);
fs.readFile('unknown-file', 'utf8', callback);
