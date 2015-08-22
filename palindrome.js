// A palindrome is a word or sentence that's spelled 
// the same way both forward and backward, 
// ignoring punctuation, case, and spacing.

function palindrome1(str){
	re = /[^\w]/gi;
	string = str.toLowerCase().replace(re,'');
	reverse = string.split('').reverse().join('');
	return string == reverse ? 1 : 0;
}	

result1 = palindrome1("Madam, I'm Adam!");

//console.log( result1 );
console.log( result1 );