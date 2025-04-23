# JavaScript Native Contracts

- [**Callable**](https://github.com/HowProgrammingWorks/NativeContracts/tree/main/JavaScript/0-callable.js) — Any value that can be invoked with `()` operator
- **Function** — Callable object, with optional `this` binding or arrow
- **AsyncFunction** — Promise-returning `Function`
- [**Callback**](https://github.com/HowProgrammingWorks/NativeContracts/tree/main/JavaScript/1-callback.js) — A function passed to another function to be called later
- **Callback-last-error-first** — Callback contract or convention `(error, result)` signature, where `error` is `Error | null`, and `result` is returned if no error
- [**Thenable**](https://github.com/HowProgrammingWorks/NativeContracts/tree/main/JavaScript/3-thenable.js) — Any object with a `.then(fn)` method
- [**Promise**](https://github.com/HowProgrammingWorks/NativeContracts/tree/main/JavaScript/4-promise.js) — Thenable with `then`, `catch`, and `finally`
- [**Iterable**](https://github.com/HowProgrammingWorks/NativeContracts/tree/main/JavaScript/5-iterable.js) — Has `[Symbol.iterator]()` that returns an `Iterator`
- [**AsyncIterable**](https://github.com/HowProgrammingWorks/NativeContracts/tree/main/JavaScript/6-async.js) — Has `[Symbol.asyncIterator]()` that returns an `AsyncIterator`
- **Iterator** — Has `.next()` returning `{ value, done }` structure
- [**Generator**](https://github.com/HowProgrammingWorks/NativeContracts/tree/main/JavaScript/7-generator.js) — A function producing an `Iterator` (sync or async), supporting `next()`, `throw()`, `return()`
- [**Array-like**](https://github.com/HowProgrammingWorks/NativeContracts/tree/main/JavaScript/8-array-like.js) — Object with indexed keys `0`, `1`, ... and numeric `.length`, but no array methods
- [**Observable**](https://github.com/HowProgrammingWorks/NativeContracts/tree/main/JavaScript/9-observable.js) — Push-based data sours available for subscription
- **EventTarget** — DOM standard interface with `.addEventListener(event, handler)`
- **EventEmitter** — Node.js style event emitter with `.on(event, handler)` and `.emit(event, ...args)`
- [**Stream**](https://github.com/HowProgrammingWorks/NativeContracts/tree/main/JavaScript/a-stream.js) — Abstraction for flow (readable/writable/duplex) with backpressure support
