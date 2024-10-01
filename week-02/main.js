// main.js
import Stack from './stack.js';
import test from 'node:test';
import assert from 'node:assert';


let stack = new Stack();
stack.print();

stack.push(5);
stack.push(8);
stack.print();

// 測試其他還沒測過的 function
stack.clear();
console.log("isEmpty() should be true: ", stack.isEmpty());

stack.push(5);
stack.push(8);
console.log("peek() should be 8: ", stack.peek()); 

stack.pop();
stack.print();
console.log("size() should be 1: ", stack.size());


// (以下是期限後補上的更進階的測試)
// 可以用 node:test 去測試
test('testing normal push operation', (t) => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  
  assert.equal(stack.peek(), 2);
});

test('testing normal pop operation', (t) => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);

  const pop = stack.pop();
  
  assert.equal(pop, 2);
  assert.equal(stack.size(), 1);
});

test('testing clear', (t) => {
  const stack = new Stack();
  stack.push(1);

  stack.clear();
  
  assert.equal(stack.size(), 0);
});

test('testing pop empty', (t) => {
  const stack = new Stack();

  const pop = stack.pop();
  
  // If using equal(), undefined and null will be the same
  assert.strictEqual(pop, undefined);
});

test('testing peak empty', (t) => {
  const stack = new Stack();

  const peek = stack.peek();
  
  assert.strictEqual(peek, undefined);
});
