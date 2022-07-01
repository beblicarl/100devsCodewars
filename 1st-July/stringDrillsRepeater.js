/*
Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.


Parameters
String, Number

Results
String

Example: (Input1, Input2 --> Output)
"a", 5 --> "aaaaa"

Pseudocode
1.Initialize an empty string and store in a variable
2. Iterate using a forLoop with a starting point of 0 and end point of less than length of String
3. Concatenate the value of string to the variable on each iteration
4. Return the value of the new string
 */

solution;
function repeater(string, n) {
  let newString = "";
  for (let i = 0; i < n; i++) {
    newString = newString.concat(string);
  }
  return newString;
}
