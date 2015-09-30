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

// http://stackoverflow.com/questions/31929074/using-javascript-array-reduce-to-remove-duplicates
function unite2(){
    // Flat array arguments, then process to reduce data
	// If my result array doesn't get current element
	// concat current element to result and return it
	// Otherwise, just return actual result array
    return [].concat.apply([], arguments).reduce(function(result, current){
		return result.indexOf(current) === -1 ? result.concat(current) : result;
    }, []);
  }

// result1 = unite1([1, 3, 2], [5, 2, 1, 4], [2, 1]);
result2 = unite2([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// console.log(result1);
console.log(result2);
