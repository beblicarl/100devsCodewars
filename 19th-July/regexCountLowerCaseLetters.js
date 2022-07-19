/*
Your task is simply to count the total number of lowercase letters in a string.

Parameter
String

Result
Number

Examples
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

Pseudocode
1.Split the string and store in a variable
2. Take the array and filter out elements that are lower case and are alphabets and store in a new variable
3. Return the length of the new variable
*/

solution;
function lowercaseCount(str) {
  let splitString = str.split("");
  let lowerCaseChar = splitString.filter(
    (x) => x == x.toLowerCase() && x.match(/[a-z]/i)
  );
  return lowerCaseChar.length;
}
