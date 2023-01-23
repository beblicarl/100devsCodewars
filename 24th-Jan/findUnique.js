/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

Parameter
Array of Numbers

Result
Number - A unique number

Example

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

Pseudocode
1. Loop through the array and find the value that is unique among the other values

*/

solution

function findUniq(arr) {
    return arr.find(x => arr.indexOf(x) === arr.lastIndexOf(x))
  }

  function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }