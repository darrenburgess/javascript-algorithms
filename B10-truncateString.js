/*
Truncate a string (first argument) if it is longer than the given maximum 
string length (second argument). Return the truncated string with a '...' ending.
*/

function truncate(str, num) {

	return str.length > num ? str.slice(0, num - 3) + "..." : str;


}


result = truncate('A-tisket a-tasket A green and yellow basket', 11);

console.log(result);