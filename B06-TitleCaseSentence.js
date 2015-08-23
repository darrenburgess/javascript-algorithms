// converts a sentence to title case, including connecting words

function titleCase(str) {
	length = str.length;
	str = str.toLowerCase();
	regex = / [a-z]/;
	for (var i = 0; i < length; i++) {
		current = str.charAt(i-1) + str.charAt(i);
		if (/ [a-z]/.test(current) || i === 0) {
			array = str.split('');
			array[i] = array[i].toUpperCase();
			str = array.join('');
		}
	}	
	return str;
}

result = titleCase("this is avery's seNTEnce and it NEEDS to be converted to upper-case");

console.log(result);