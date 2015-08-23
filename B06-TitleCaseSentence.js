// converts a sentence to title case, including connecting words

function titleCase(str) {
	length = str.length;
	str = str.toLowerCase();
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

// from http://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){
    	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

result1 = titleCase("this is avery's seNTEnce and it NEEDS to be converted to upper-case");
result2 = toTitleCase("this is avery's seNTEnce and it NEEDS to be converted to upper-case");

console.log(result1);
console.log(result2);