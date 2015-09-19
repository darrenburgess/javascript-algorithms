/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
Array.indexOf()
Array.push()
Array.join()
String.substr()
String.split()
*/

function translate1(str){
	vowel = /[aeiou]/;
	oneCons = /^(?:(?![aeiou])[a-z])/;
	twoCons = /^(?:(?![aeiou])[a-z]){2}/;
	threeCons = /^(?:(?![aeiou])[a-z]){3}/;
	if (vowel.test(str[0])) {
		return str + "way";
	} else if (threeCons.test(str)) {
		return str.slice(3) + str.slice(0,3) + 'ay';
	} else if (twoCons.test(str)) {
		return str.slice(2) + str.slice(0,2) + 'ay';
	} else {
		return str.slice(1) + str.slice(0,1) + 'ay';
	}
}

function translate2(str){
	vowel = /^[aeiou]/;
	array = str.split('');
	isVowel = vowel.test(array[0]);
	if (isVowel){
		str = str + "way";
	} else {
		while (isVowel === false) {
			array.push(array.splice(0,1));
			isVowel = vowel.test(array[0]);
		}
		str = array.join('') + 'ay';
	}
	return str;
}

function translate3(str){
	vowel = /[aeiou]/g;
	if (vowel.test(str[0])) {
		str = str + 'way';
	} else {
		idx = str.indexOf(str.match(vowel)[0]);
		str = str.substr(idx) + str.substr(0,idx) + 'ay';
	}
	return str;
}

result1 = translate1("Hello");
result2 = translate2("Hello");
result3 = translate3("throughput");

console.log(result1);
console.log(result2);
console.log(result3);