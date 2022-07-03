/*

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

Parameter
Array

Result
Array , Null

Example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

Pseudocode
1. Check if the value of num exists
2. If yes, return the sorted array
3. If not, return an empty array
 */

solution;
function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}
