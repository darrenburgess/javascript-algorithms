/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function boo (bool){
	return (Boolean(bool) === bool) ? true : false;
}

result = boo(null);

console.log(result);