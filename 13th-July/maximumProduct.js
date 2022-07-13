/*
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Parameters
Array of Numbers

Result
Number

Example
adjacentElementsProduct([5, 8]), 40);
adjacentElementsProduct([1, 2, 3]), 6);
adjacentElementsProduct([1, 5, 10, 9]), 90);
adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);

Pseudocode
1. Initialize an empty array
2. Iterate through the array and push the muliplication of the first and second index of elements in the array
3. Return the max value in the new array

*/

solution;
function adjacentElementsProduct(array) {
  let newArray = [];
  for (i = 0; i < array.length - 1; i++) {
    newArray.push(array[i] * array[i + 1]);
  }
  return Math.max(...newArray);
}
