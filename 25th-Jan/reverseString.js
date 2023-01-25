/*

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Parameter
String of characters

Result
String of reversed characters

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

Pseudocode
1. Split the string into an array of strings
2. Use the reverse array method to reverse the individual strings
3. Join the array to get the reversed individual strings
4. Reverse the string again to get the entire strings reversed
5. Join the strings

*/

solution

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
  }