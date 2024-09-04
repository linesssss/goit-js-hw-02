"use strict";
function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    total += order[i];
  }
  return total;
}
console.log(calculateTotalPrice([1, 2, 3]));

function calculateTotalPrice1(order1) {
  let total = 0;
  for (let index of order1) {
    total += index;
  }
  return total;
}
console.log(calculateTotalPrice([164, 48, 291]));

function sum(a, b) {
  console.log(arguments);
  return a + b;
}

sum(2, 5);

function multiply() {
  let total = 1;

  for (const arg of arguments) {
    total *= arg;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120
function foo() {
  const args = Array.from(arguments);
  return args.join("-");
}
console.log(foo(1, 2, 3));
function createReversedArray() {
  const args = Array.from(arguments);
  return args.toReversed();
}
console.log(createReversedArray(164, 48, 291));

function calculateTax(amount, taxRate = 0.2) {
  return amount * taxRate;
}
console.log(calculateTax(20, 0.5));