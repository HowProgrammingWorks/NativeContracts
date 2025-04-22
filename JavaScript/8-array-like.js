'use strict';

// Array-like

const arrayLike = {
  0: 'a',
  1: 'b',
  length: 2,
};

const array = Array.from(arrayLike);
console.log(array);

// Class

class ArrayLike {
  constructor(...items) {
    for (let i = 0; i < items.length; i++) {
      this[i] = items[i];
    }
    this.length = items.length;
  }
}

const instance = new ArrayLike('a', 'b');
console.log(Array.from(instance));

// Arguments

const f = function () {
  console.log(arguments);
  console.log(arguments.length);
};

f('a', 'b');
