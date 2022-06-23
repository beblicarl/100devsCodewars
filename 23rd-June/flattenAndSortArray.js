/*

Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.


Parameter
Array

Result
Array


Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Pseudocode
1. Return an empty array
2. Concat the other arrays into the empty array
3. Sort out the numbers in the array

*/

solution;
("use strict");

function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b);
}
