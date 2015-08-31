/*
Write a function that splits an array (first argument) into groups the length 
of size (second argument) and returns them as a multidimensional array.
*/

function chunk(arr, size) {
	arrFinal = [];
	for (i = 0; i < arr.length; i += size){
		chnk = arr.slice(i, i + size);
		arrFinal.push(chnk);
		}
	return arrFinal;
}

result = chunk(['a', 'b', 'c', 'd', 'e'], 2);

console.log(result);