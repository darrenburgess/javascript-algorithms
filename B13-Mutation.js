/*
Return true if the string in the first element of the array contains 
all of the letters of the string in the second element of the array.

For example, ['hello', 'Hello'], should return true because all of 
the letters in the second string are present in the first, ignoring case.

The arguments ['hello', 'hey'] should return false because the string 
'hello' does not contain a 'y'.

Lastly, ['Alien', 'line'], should return true because all of the letters 
in 'line' are present in 'Alien'.
*/


function mutation1(arr) {
	first = arr[0].toLowerCase();
	second = arr[1].toLowerCase();
	len = second.length;
	count = 0;
	for (i = 0; i < len; i++) {
		current = second[i];
		isPresent = first.indexOf(current);
		count = isPresent != -1 ? count = count + 1 : count;
	}	
	return count === len ? true : false;
}

// somewhat less code but less readable?
function mutation2(arr) {
	count = 0;
	for (i = 0; i < arr[1].length; i++) {
		count =   arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) != -1 
				? count = count + 1 
				: count;
	}
	return count === arr[1].length ? true : false;
}


result1 = mutation1(['Hello', 'hel']);
result2 = mutation2(['Hello', 'Hel']);

console.log(result1);
console.log(result2);
