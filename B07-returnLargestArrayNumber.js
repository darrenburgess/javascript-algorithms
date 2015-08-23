function largestOfFour1(outerArray) {
	var finalArray = [];
	for(o = 0; o < outerArray.length; o++){
		var innerArray = outerArray[o];
		largest = 0;
		for(i = 0; i < innerArray.length; i++){
			largest = innerArray[i] > largest ? innerArray[i] : largest;
		}
		finalArray.push(largest); 
	}
	return finalArray;
}

// found here: https://gist.github.com/having-fun-coding/3dde829290af87411a96
function largestOfFour2(outerArray) {
	var finalArray = [];
	for(o = 0; o < outerArray.length; o++){
		var innerArray = outerArray[o];
		var largest = Math.max.apply(Math,innerArray);
		finalArray.push(largest); 
	}
	return finalArray;
}

// http://stackoverflow.com/questions/29976664/return-largest-number-in-arrays
function largestOfFour3(arr) {
	return arr.reduce(function(p,c,index,arr){
		p.push(Math.max.apply(null,c));
		return p;
	},[]);
}

// http://stackoverflow.com/questions/29976664/return-largest-number-in-arrays
// this one not working, but works on SO
function largestOfFour4(arrs) {
	return arrs.map(function(arr){
		return Math.max.apply(null, arr);
	});
}

result1 = largestOfFour1([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
result2 = largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
result3 = largestOfFour3([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
result4 = largestOfFour4([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(result1);
console.log(result2);
console.log(result3);

