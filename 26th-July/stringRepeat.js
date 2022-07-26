/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Parameter
String , Number

Result
String

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

Pseudocode
1. Repeat the string n amount of times
*/

solution;
function repeatStr(n, s) {
  return s.repeat(n);
}
