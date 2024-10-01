// Summary:
// reduce() 可以將 array reduce 成 single value
// 因此它很適合做「需要看過所有元素，但最後只需要一個值」
// 相較於其他常見的 array function:
// - foreach(): 每個元素都要做某件事情
// 		- 如果用來算總和，還需要額外宣告變數，不像 reduce() 會直接回傳值
// - map(): 將每個元素做變化並回傳一個新的 array
//		- 如果用來算總和，不會用到回傳的 array

// Use reduce to reduce an array into a value
function sum(ary) {
	//  Specify an initial value of 0 for empty array cases
	return ary.reduce(
		(accumulator, curVal) => accumulator + curVal, 0
	)
}

console.log(sum([1, 5, 3, 2])); // 11
console.log(sum([])); // 0

// (optional) 挑戰題: 有幾種寫法？
// (1) sum by reduce()
// (2) sum by recursion:
function sumByRecur(ary) {
	if(ary.length == 0) return 0;
	return ary[0] + sum(ary.slice(1));
}

console.log(sumByRecur([1, 5, 3, 2])); // 11

//(optional) 挑戰題: 如果 sum 函式的 input 是 n，
// 	然後要回傳 1 + 2 + 3 + … + n 的話，一樣不能用 for, while 寫，要怎麼做？
//  (1) 用梯形公式:
function sumOfN(n) {
	return (1 + n) * n / 2;
}

// (2) 硬把 1~n 的 array 做出來再 sum
function sumOfN2(n) {
	// Array(n) will create an n-size empty array,
	// using .keys() to make the array fill with values (key),
	// but the key start with 0, so use map() to add 1
	let arr = [...Array(n).keys()].map(x => x + 1);
	return sum(arr);
}

console.log(sumOfN(10));
console.log(sumOfN2(10));
