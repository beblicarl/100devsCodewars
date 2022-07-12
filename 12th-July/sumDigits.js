/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

Parameter
Array of Numbers

Result
Array of Numbers

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

Pseudocode
1. Find the absolute value of the number
2. Turn the number into a string
3. Split into a array of string
4. Iterate , turn the strings into numbers and find their accumulator
5. Return the value

*/

solution;
function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((acc, c) => Number(acc) + Number(c), 0);
}
