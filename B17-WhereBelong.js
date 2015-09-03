/*

Return the lowest index at which a value (second argument) should be inserted into a 
sorted array (first argument).

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (0th index), 
but less than 2 (1st index).

*/

function where(arr, num) {
	arr.push(num);
	position = arr.sort(function(a,b){return a-b;}).indexOf(num);
	return position;
}

result = where([10, 20, 30, 40, 50], 30);

console.log(result);