'use strict';

class Callable extends Function {
  method() {
    console.dir({
      label: 'From Callable.method',
      property: this.property,
      method: this.method,
    });
    this(); // you can call this as a function
  }

  static create() {
    const fn = function () {
      fn.property = 'value';
      console.dir({
        label: 'From function',
        property: fn.property,
        method: fn.method,
      });
    };
    Object.setPrototypeOf(fn, Callable.prototype);
    return fn;
  }
}

const fn = Callable.create();
fn();
fn.method();
