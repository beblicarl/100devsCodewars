/*

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

Parameter
Number

Result
Number

Example
For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.

Pseudocode
1. Remove every symbol using Math.abs()
2. Change the number into a string using toString()
3. Split the string to create an array of the individual characters as a string
4. Using the reduce() array method, find the accumulator of the individual strings in the array changed to a number
5. Return the new value
*/

solution

function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((a, c) => +a + +c, 0)
  }
  