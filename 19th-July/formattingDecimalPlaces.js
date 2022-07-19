/*
Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Parameter
Number

Result
Number

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34

Pseudocode
1. use the toFixed(2) method with an argument 2 to convert the number into a string of 2 decimal places
2. Convert the string into a Number and return it

*/

solution;
function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
}
