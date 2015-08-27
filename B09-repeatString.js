function repeat1(str, num) {
	strArray = [];
	for (var i = 0; i < num; i++) {
		strArray.push(str);
	}
	return strArray.join('');
}

// ECMAScript 2015 (ES6) standard does not work in node console
function repeat2(str, num){
	str.repeat(num);
}

result1 = repeat1('abc', 6);
// result = repeat2('abc', 6);

console.log(result1);
// console.log(result2);