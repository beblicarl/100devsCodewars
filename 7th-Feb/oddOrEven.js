/*

Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Parameters
Array of Numbers

Result 
String

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

Pseudocode
1. Find the sum of the values in the array and store in a variable
2. Find the modulos of the value and if the number modulus 2 is 0 we return 'even' or else we return 'odd'
*/

solution

function oddOrEven(array) {
    const sumOfArray = array.reduce((a , c) => a + c, 0)
    return sumOfArray % 2 === 0 ? 'even' : 'odd'
 }

 function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }