/*
Perform a search and replace on the sentence using the arguments provided 
and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. 
For example if you mean to replace the word 'Book' with the word 'dog', 
it should be replaced as 'Dog'

Array.splice()
String.replace()
Array.join()

*/

function replace1 (str, before, after) {
	re = new RegExp(before,"g");
	reUpr = new RegExp(/^[A-Z]/);
	beforeStart = str.search(re);
	beforeLen = before.length;
	replaced = str.substr(beforeStart, beforeLen);
	caseUpr = reUpr.test(replaced);
	after = caseUpr === true ? after[0].toUpperCase() + after.slice(1) : after;
	result = str.replace(before, after);
	return result;
}

// FCC wiki solution
function replace2 (str, before, after) {
	// Find index where before is on string
	index = str.indexOf(before);
	// Check to see if the first letter is uppercase or not
	if (str[index] == str[index].toUpperCase()) {
		// Change the after word to be capitalized before we use it.
		after = after[0].toUpperCase() + after.slice(1);		
	};
	// Now replace the original str with the edited one.
	result = str.replace(before, after);
	return result;
}

result1 = replace1("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
result2 = replace2("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");


console.log(result1);
console.log(result2);
