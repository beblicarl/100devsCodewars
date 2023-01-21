/*
Given a sequence of numbers, find the largest pair sum in the sequence.


Parameter
Array of numbers

Result
Number - sum of the two largest values int he array

Example
For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.

Pseudocode
1. Sort the array from least to big and store the values in an array
2. Return the sum of the two largest values in the array
*/

solution
function largestPairSum (numbers) {
    let sortedArray = numbers.sort((a, b) => a - b)
    return sortedArray[sortedArray.length - 1 ] + sortedArray[sortedArray.length - 2 ]
  }