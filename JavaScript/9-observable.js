'use strict';

const observable = new EventTarget();

observable.addEventListener('buy', (event) => {
  const bought = event.detail;
  console.log({ bought });
});

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

for (const item of electronics) {
  const data = { detail: item };
  const event = new CustomEvent('buy', data);
  observable.dispatchEvent(event);
}
