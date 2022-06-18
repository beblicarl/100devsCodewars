// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

// Parameter
// Number - Parameter is a Number
//
// Result
// Array - Result is an array from 0 to the Number - 1
//
// Example
// arr(5) // => [0,1,2,3,4]
// array(9) => [1,2,3,4,5,6,7,8,9]
//
// Pseudocode
// 1. Initialize an empty array
// 2. Iterate through numbers with the starting point of 0 and the end point being equal to or less than Number
// 3. Push the value of i on each iteration
// 4. Return the array
//

solution;

const arr = (N) => {
  let array = [];
  for (let i = 0; i <= N - 1; i++) {
    array.push(i);
  }
  return array;
};
