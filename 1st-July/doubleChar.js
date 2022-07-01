/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Parameter
String

Result
String

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Pseudocode
1.Split the string into an array of strings
2. Map through array of strings and repeat each string twice within the array
3. Join the array back to a string and return the new string
 */

solution;
function doubleChar(str) {
  return str
    .split("")
    .map((x) => x.repeat(2))
    .join("");
}
