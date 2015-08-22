function findLongestWord(str) {
  strArray = str.split(' ');
  numWords = strArray.length;
  var longestWordLength = 0;
  for (var i = 0; i < numWords; i++) {
  	wordLength = strArray[i].length;
	var longestWordLength = wordLength > longestWordLength ? wordLength : longestWordLength;
  }
  return longestWordLength;
}

var longWord = findLongestWord('The quick brown fox jumped over the lazy dog') 

console.log ( longWord );