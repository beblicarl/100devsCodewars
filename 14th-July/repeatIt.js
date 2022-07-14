/*
Create a function that takes a string and an integer (n).

The function should return a string that repeats the input string n number of times.

If anything other than a string is passed in you should return "Not a string"

Parameter
String
Number

Result
String

Example
"Hi", 2 --> "HiHi"
1234, 5 --> "Not a string"

Pseudocode
1. Check if the value passed is a string, if yes you repeat it a n number of times
*/

solution;
var repeatIt = function (str, n) {
  return typeof str == "string" ? str.repeat(n) : "Not a string";
};
