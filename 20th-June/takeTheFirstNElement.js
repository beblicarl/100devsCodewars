// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

/*
Parameter
Array
Number

Result
Array 

Example
take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");

Pseudocode
1.slice thr array with a starting point of 0 and ending point of N
*/

solution;
function take(arr, n) {
  return arr.slice(0, n);
}
