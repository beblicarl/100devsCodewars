/*Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).


Parameter
Array - Parameter is an array of numbers

Result
Array - Array of numbers incrementing by 1

Example
Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

Pseudocode
1. Sort out the numbers in the array and store it in a variable called sortedArray
2. Initialize an empty array
3. Loop through numbers with a starting point of sortedArray[0] and end point of sortedArray[sortedArray - 1]
4. Push the new values of i on each iteration


*/

Solution;

function pipeFix(numbers) {
  let sortedNumbers = numbers.sort((a, b) => a - b);
  let array = [];
  for (
    i = sortedNumbers[0];
    i <= sortedNumbers[sortedNumbers.length - 1];
    i++
  ) {
    array.push(i);
  }
  return array;
}
