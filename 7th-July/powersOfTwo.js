/*

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Parameters
Number

Result
Array of Numbers


Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

Pseudocode
1.Initialise an empty array
2. Create a for loop that loops n times 
3. Push the new values of  Math.pow and the new exponent on each iteration with a base number of 2
4. Return the new array

*/

solution;
function powersOfTwo(n) {
  let array = [];
  for (let i = 0; i <= n; i++) {
    array.push(Math.pow(2, i));
  }
  return array;
}
