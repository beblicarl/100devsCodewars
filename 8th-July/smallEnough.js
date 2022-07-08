/*

You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

Parameters
Array of Numbers , Number

Result
Boolean

Example
smallEnough([66, 101], 200), true);
smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
smallEnough([101, 45, 75, 105, 99, 107], 107), true);
smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);

Pseudocode
1. Itereate through the array, find if all elements are less than or equal to the limit and store in a variable
2. You find if the new array contains false if not then return true or else false

*/

solution;
function smallEnough(a, limit) {
  let checkA = a.map((x) => (x <= limit ? true : false));
  return checkA.includes(false) ? false : true;
}

function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}

smallEnough = (a, l) => a.every((e) => e <= l);
