/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)

Parameter
String

Result
Number

Example
getNumberFromString("1"), 1);
getNumberFromString("123"), 123);
getNumberFromString("this is number: 7"), 7);

Pseudocode
1. Check if any of the element of the string is not an alphabet and store in a variable
2. Turn the variable into a string
3. Return the string as a number
*/

solution;
function getNumberFromString(s) {
  let number = s.match(/\d/g);
  number = number.join("");
  return Number(number);
}
