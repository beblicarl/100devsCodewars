// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

/*

Parameter
Number

Result 
Array - Array of numbers from 1 to that Number

Examples
preFizz(1), [1], `Array should be from 1 to 1`);
preFizz(2), [1,2], `Array should be from 1 to 2`);
preFizz(3), [1,2,3], `Array should be from 1 to 3`);
preFizz(4), [1,2,3,4], `Array should be from 1 to 4`);
preFizz(5), [1,2,3,4,5], `Array should be from 1 to 5`);

Pseudocode
1.Initialize an empty array
2. loop through numbers with a starting point of 1 and end point of less than or equal to the Number
3. Push the new value of i to the array on each iteration
*/

solution;

function preFizz(n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array;
}
