/*
Compare two arrays and return a new array with 
any items NOT found in both of the original arrays.
Array.slice()
Array.filter()
Array.indexOf()
Array.concat()
*/

function diff(arr1, arr2) {
	len = arr1.length;
	x = 0;
	while ( x < len ) {
		value = arr1[x];
		arr2Index = arr2.indexOf(value);
		if (arr2Index != -1) {
			arr1.splice(x,1);
			arr2.splice(arr2Index, 1);
			len = arr1.length;
		} else {
			x++;
			len = arr1.length;
		}
		console.log(arr1, arr2);
	}
	return arr1.concat(arr2);
}

// result = diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
result = diff(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']);

console.log(result);