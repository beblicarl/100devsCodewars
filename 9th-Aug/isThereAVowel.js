/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

Parameters
Array of Numbers

Result
Array of Numbers and Strings

Examples
isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);

Pseudocode
1.Map over the array and check if String.fromCharCode() of any of the numbers is equal to the vowels
2. If yes, replace those numbers with the vowels
3. Return the new array containing those vowels
*/

solution;
function isVow(a) {
  return a.map((i) => {
    if (String.fromCharCode(i) === "a") {
      return "a";
    }
    if (String.fromCharCode(i) === "e") {
      return "e";
    } else if (String.fromCharCode(i) === "i") {
      return "i";
    } else if (String.fromCharCode(i) === "o") {
      return "o";
    } else if (String.fromCharCode(i) === "u") {
      return "u";
    } else return i;
  });
}
