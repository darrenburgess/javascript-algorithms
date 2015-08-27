function end1(str, target) {
	lenTarget = target.length;
	lenStr = str.length;
	endStr = str.substr(lenStr - lenTarget, lenTarget);
	result = endStr === target ? true : false;
	return result;
}

function end2(str, target) {
	return str.substr(str.length - target.length) === target ? true : false;;
}

result1 = end1('string first, in which case it will return fewer', 'fewer');
result2 = end1('string first, in which case it will return fewer', 'fewer');

console.log(result1);
console.log(result2);

