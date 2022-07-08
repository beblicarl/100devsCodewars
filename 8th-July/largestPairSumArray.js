/*
Given a sequence of numbers, find the largest pair sum in the sequence.

Parameters
Array of Numbers

Result
Number


Example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.

Pseudocode
1. Sort the array
2. Return the sum of the last number and the last but one number

*/

solution;
function largestPairSum(numbers) {
  let sortedArray = numbers.sort((a, b) => a - b);
  return (
    sortedArray[sortedArray.length - 1] + sortedArray[sortedArray.length - 2]
  );
}
