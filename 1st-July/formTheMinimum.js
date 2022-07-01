/*

Given a list of digits, return the smallest number that could be 
formed from these digits, using the digits only once (ignore duplicates).

Parameter
Number - Array of numbers

Result
Number 

Examples
minValue ({1, 3, 1})  ==> return (13)

Pseudocode
1. Find the unique values in the array and store it in a variable
2. Join the variable and turn into a number
3. Return the final value
*/

Solution;
function minValue(values) {
  let uniqueValues = [...new Set(values)].sort();
  return Number(uniqueValues.join(""));
}
