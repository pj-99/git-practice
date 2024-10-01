// Summary:
// JS 的 closure 可以用存放只有該 function 內可以取得的狀態，
// 因此能做 cache 之類的機制，將計算好的結果存起來，同時又不讓外部的 scope 知道

function fib(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

// Use closure and memorization to save time
function memorizedFib() {
  // This fibArr will keep its value after calling memorizedFib()
  let fibArr = [0, 1]
  return function (n) {
    // If already computed
    if (fibArr.length > n) return fibArr[n];

    for (let i = fibArr.length; i <= n; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr[n];
  }
}

console.time('recursive fib');
console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(5)); // 5
console.log(fib(10)); // 55
console.log(fib(40)); // 102334155

console.timeEnd('recursive fib');
// recursive fib: 952.998ms

let fibFunc = memorizedFib();

console.time('memorized fib');
console.log(fibFunc(0)); // 0
console.log(fibFunc(1)); // 1
console.log(fibFunc(5)); // 5
console.log(fibFunc(10)); // 55
console.log(fibFunc(40)); // 102334155

console.timeEnd('memorized fib');
// memorized fib: 0.776ms