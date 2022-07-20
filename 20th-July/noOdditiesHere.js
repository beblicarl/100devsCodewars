/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

Parameters
Array of Numbers

Result
Array of Numbers

Example
noOdds( [0,1] ), [0] )
noOdds( [0,1,2,3] ), [0,2] )

Pseudocode
1. Iterate over the array and return a new array with elements modulos 2 being equal to 0

*/

solution;
function noOdds(values) {
  return values.filter((x) => x % 2 == 0);
}
