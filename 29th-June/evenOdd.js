/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

Parameters
Numbers

Result
Numbers

Pseudocode
1. Check if number modulus 2 is not equal to 0
2. If not, return Odd or else even


*/

solution;
function even_or_odd(number) {
  return number % 2 != 0 ? "Odd" : "Even";
}
