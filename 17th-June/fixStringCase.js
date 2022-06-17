// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

// Parameter
// String -Parameter is a string
//
// Result
// Uppercase or lowercase string

// Example
// solve("coDe") = "code". Lowercase characters > uppercase. Change onl
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
//
// Pseudocode
//split the string and check the length of all characters that are in uppercase
//subtract the total length of the string with the length of uppercase to find the length of lowercase
//if the length of the uppercase is more than the length of the lowercase the entire string should be in uppercase or vice versa

Solution;

function solve(s) {
  let upper = s.split("").filter((x) => x === x.toUpperCase()).length;
  let lower = s.length - upper;
  return upper > lower ? s.toUpperCase() : s.toLowerCase();
}
