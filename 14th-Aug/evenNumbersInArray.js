/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

Parameters
Array of Numbers

Result
Array of Numbers

Example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

Pseudocode
1. Initialise a variable even and use the filter method to get the even numbers and store in the vaiable
2. Use the slice method and negate the input to get a new array 
3. Return the new array
*/

solution;
function evenNumbers(array, number) {
  let even = array.filter((x) => x % 2 == 0);
  return even.slice(-number);
}
