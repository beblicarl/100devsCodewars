/*
Write a function that checks if a given string (case insensitive) is a

Parameter
String

Result
String

Example
isPalindrome("a"), true));
isPalindrome("aba"), true));
isPalindrome("Abba"), true));
isPalindrome("hello"), false));
isPalindrome("Bob"), true));
isPalindrome("Madam"), true));
isPalindrome("AbBa"), true));
isPalindrome(""), true));

Pseudocode
1. turn the string to lowercase and check if its equal to the reversed version of the string
*/

solution;
function isPalindrome(x) {
  return x.toLowerCase() == x.toLowerCase().split("").reverse().join("");
}
