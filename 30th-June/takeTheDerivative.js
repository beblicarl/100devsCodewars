/*

This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

Parameter
Numbers

Result
Numbers


Example:
derive(7, 8)
In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

derive(7, 8) --> this should output "56x^7" 
derive(5, 9) --> this should output "45x^8" 
 the second number being the exponent.
, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.



Pseudocode
1.Multiply the coefficient and exponent and store in a variable
2.Add the variable to "x" + stringof exponent - 1
3. Return value


 */

solution;
function derive(coefficient, exponent) {
  let multiply = coefficient * exponent;
  return multiply.toString() + "x" + "^" + (exponent - 1).toString();
}
