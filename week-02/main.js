// main.js
import Stack from './stack.js';

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
