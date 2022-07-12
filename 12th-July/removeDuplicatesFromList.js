/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

Parameter
Array of numbers

Result
Array of Numbers

Example
distinct([1]), [1]);
distinct([1,2]), [1,2]);
distinct([1,1,2]), [1,2]);

Pseudocode
1. Iterate through the array and filter out the elements that are equal to their index

*/

solutions;
function distinct(a) {
  return a.filter((x, i, a) => a.indexOf(x) == i);
}

function distinct(a) {
  return [...new Set(a)];
}
