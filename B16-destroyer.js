/*
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of 
the same value as these arguments.

Arguments object
Array.filter()
*/

function removeValues1(arr){
	array = arguments[0];
	args = Array.prototype.slice.call(arguments);
	len = arguments.length;
		filtered = array.filter(function(n){
			x = true;
			for (var i = 1; i < len; i++) {
				if (n == args[i]) { x = false; }
			}
			return x;
		});
	return filtered;
}

/*
When you're working with the filter function is not necessary to use loops because
you're already in a loop. After converting the arguments into an array with 
[].slice.call(arguments), you could use indexOf that is responsible for returning 
the position of a value in an array, if a value is not exists, this returns -1, so 
we will take all the results that are -1
*/

// SO solutions
//http://stackoverflow.com/questions/32352054/javascript-remove-values-from-an-error-that-are-in-a-second-array
function removeValues2(arr){
    return arr.filter(function(val){
        return [].slice.call(removeValues2.arguments).indexOf(val) === -1;
    });
}



var array1 = [ 1, 2, 3, 4, 5 ];
var array2 = [ 2, 3 ];

var result3 = array1.filter( function ( elem ) {
    return array2.indexOf( elem ) === -1;
});

function removeValues4(arr){
  return arr.filter(function(val){
    return [].slice.call(removeValues4.arguments).slice(1).indexOf(val) === -1
  })
}

result1 = removeValues1([1,2,3,1,2,3],2,3);
result2 = removeValues2([1,2,3,1,2,3],2,3);
result4 = removeValues4([1,2,3,1,2,3],2,3);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);