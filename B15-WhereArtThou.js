/*
Make a function that looks through an array (first argument) and 
returns an array of all objects that have equivalent property values (second argument).
	
	Global Object
	Object.hasOwnProperty()
	Object.keys()
*/

function where(collection, source) {
	var srcKey = Object.keys(source);
	var val = source[srcKey];
	return collection.filter(function(n, k){
		console.log(k);
		if (collection[k][srcKey] === val){
			return n;
		} 
	});
}

result = where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: 'Montague' }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });

console.log(result);


