/*
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

Parameters
Array , Number

Result
Boolean

Example
include([1,2,3,4], 3), true )
include([1,2,4,5], 3), false)

Pseudocode
1. Use include method to evaluate if item is included in the array

*/

solution;

function include(arr, item) {
  return arr.includes(item);
}
