/*

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Parameters
Array of Numbers

Result 
Number

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

Pseudocode
1. Iterate through the array and filter out elements in the array whose index is the last index of that number
2. Join the element to turn the array as to a string and use the Number function to turn it into a number
3. Return new number
*/

solution;
function stray(numbers) {
  return Number(
    numbers
      .filter((x) => numbers.indexOf(x) === numbers.lastIndexOf(x))
      .join("")
  );
}
