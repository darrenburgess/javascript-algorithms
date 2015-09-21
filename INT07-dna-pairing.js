/*

The DNA strand is missing the pairing element. 
Take each character, get its pair, and return 
the results as a 2d array.

Base pairs are a pair of AT and CG. Match the 
missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return 
[['G', 'C'], ['C','G'],['G', 'C']]

The character and its pair are paired up in an array, 
and all the arrays are grouped into one encapsulating array.

*/

function pair(str){
	arr = str.split('');
	len = arr.length;
	strand = [];
	for (var i = 0; i < len; i++) {
		basePair = [];
		element = arr[i];
		basePair.push(element);
		if (element == 'G') {
			basePair.push('C');
		} else if (element == 'C') {
			basePair.push('G');
		} else if (element == 'T') {
			basePair.push('A');
		} else if (element == 'A') {
			basePair.push('T');
		}
		strand.push(basePair);
	}
	return strand;
}

result = pair('GCGATTTAAGCGC');

console.log(result);