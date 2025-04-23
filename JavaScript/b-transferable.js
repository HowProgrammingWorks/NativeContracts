'use strict';

const { Worker, workerData, isMainThread } = require('worker_threads');

if (isMainThread) {
  const workerData = new ArrayBuffer(8);
  const uint32 = new Uint32Array(workerData);
  uint32[0] = 42;
  console.log('Main: before transfer', uint32);

  const transferList = [workerData]; // Mark buffer as transferable
  const worker = new Worker(__filename, { workerData, transferList });

  worker.on('exit', () => {
    console.log('Main: after transfer', uint32);
  });
} else {
  const uint32 = new Uint32Array(workerData);
  console.log('Worker: received buffer', uint32);
  uint32[0] += 1;
}
