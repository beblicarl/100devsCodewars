/*
Task Overview
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

Parameter
Number

Result
Number

Example
to_binary(1)   should return 1 
to_binary(5)  /* should return 101 

Pseudocode
1. convert it to binary with toString(2) which returns a string
2. convert the string to a number


*/

solution;
function toBinary(n) {
  let string = n.toString(2);
  return Number(string);
}
