/*
Remove all falsey values from an array.
Falsey values in javascript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
	return arr.filter(function(n){
		if (Boolean(n) !== false){
			return n;
		} 
	});
}

result = bouncer([false, null, 0, 1, "asdf", true]);

console.log(result);
