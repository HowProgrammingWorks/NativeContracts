'use strict';

// Just a function

const callable = (...pars) => {
  const { length } = pars;
  return length;
};

// Built-in JavaScript Proxy

const proxy = new Proxy(callable, {
  apply: (target, context, args) => {
    console.log('call', target.name, context, args);
    const res = target(...args);
    console.log('return', res);
    return res;
  },
});

const argCount = proxy(1, 2, 3);
console.log({ argCount });
