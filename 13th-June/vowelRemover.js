// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

solution;
//pseudo code
//split the string into an array of strings
//use the filter methods to remove members of the array that isn't equal to any of the lowercase vowels
//join the array back to a string

function shortcut(string) {
  return string
    .split("")
    .filter(
      (x) => x !== "a" && x !== "e" && x !== "i" && x !== "o" && x !== "u"
    )
    .join("");
}

//test cases
shortcut("heLLo");
shortcut("Codewars");
