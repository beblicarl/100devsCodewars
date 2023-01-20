/*

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

Parameters
Null , empty array, array of numbers

Result
Empty array, array of numbers

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

Pseudocode
1. Check if the value is null, if yes, return an emtpy array or else return an a sorted array from least to biggest value using the sort method
*/

solution
function solution(nums) {
    return nums == null ? [] : nums.sort((a, b) => a - b);
}