/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/


function convert(num) {
	tens = ['I','X','C','M'];
	fives = ['V','L','D'];
	numArray = String(num).split('').map(Number);
	len = numArray.length - 1;
	x = 0;
	for (var i = len; i >= 0; i--) {

		number = numArray[i];
		ltrTen = tens[x];
		ltrTensNext = tens[x+1];
		ltrFive = fives[x];

		if ( number == 1 || number == 2 || number == 3 ) {
			chunk = Array( number + 1 ).join(ltrTen);
		} else if ( number == 4 ) {
			chunk = ltrTen + ltrFive;
		} else if ( number == 5 ) {
			chunk = ltrFive;
		} else if ( number == 6 || number == 7 || number == 8 ) {
			chunk = ltrFive + Array( number - 4 ).join( ltrTensNext );
		} else if ( number == 9 ) {
			chunk = ltrTen + ltrTensNext;
		}

		x = x + 1;

		final = chunk + final;

	}
}

result = convert(36);

console.log(result);