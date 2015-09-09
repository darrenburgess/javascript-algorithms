/*

We'll pass you an array of two numbers. Return the sum of those two 
numbers and all numbers between them.

The lowest number will not always come first.

Math.max()
Math.min()
Array.reduce()

*/

function sumAll(arr) {
	arrMax = Math.max.apply(Math, arr);
	arrMin = Math.min.apply(Math, arr);
	var number = 0;
	for (var i = arrMin; i <= arrMax; i++) {
		number = number + i;
	}
	return number;
}

sumAll([1, 4]);
