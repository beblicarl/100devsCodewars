/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.


Parameters
String

Result
String

Examples
isSortedAndHow([1, 2]), 'yes, ascending');
isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
isSortedAndHow([4, 2, 30]), 'no');

Pseudocode
1. Initialise a variable and store the string version of the array in it
2. Initialise another variable, sort the array in ascending order and store it as a string
3. Initialize another variable, sort the array in descending order and store it as a string
3. Compare if the string version is equal to the ascending order, descending order and return the corresponding string
*/

solution;

function isSortedAndHow(array) {
  let s = array.join("");
  let ascendingOrder = array.sort((a, b) => a - b).join("");
  let descendingOrder = array.sort((a, b) => b - a).join("");

  return s == ascendingOrder
    ? "yes, ascending"
    : s == descendingOrder
    ? "yes, descending"
    : "no";
}
