/*
Return the remaining elements of an array after chopping 
off n elements from the head.
*/

function slasher(arr, howMany) {
  x = arr.splice( 0, howMany );
  return arr;
}

result = slasher([1, 2, 3, 4, 5, 6], 7);

console.log(result);
