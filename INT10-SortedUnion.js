/*
Write a function that takes two or more arrays and returns a 
new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included 
in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but 
the final array should not be sorted in numerical order.

Arguments object
Array.reduce()

*/

function unite1(arr1, arr2, arr3) {
	arr = Array.prototype.slice.call(arguments);
	arr2 = arr.reduce(function(prev,next){
		return prev.concat(next);
	});
	newArr = arr2.filter(function(value, idx){
		return arr2.indexOf(value) == idx;
	});
	return newArr;
}

function unite2(arr1, arr2, arr3) {
	arr = Array.prototype.slice.call(arguments).reduce(function(prev,next){
		return prev.concat(next);
	});
	newArr = arr.filter(function(value, idx){
		return arr.indexOf(value) == idx;
	});
	return newArr;
}

// result1 = unite1([1, 3, 2], [5, 2, 1, 4], [2, 1]);
result2 = unite2([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// console.log(result1);
console.log(result2);
