// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Parameter
// String : Parameter is a string

// Result
// Output is reversed words in a string

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

// PseudoCode
// 1. Split the string by the words
// 2. Reverse the words in the resultant Array
// 3. Join the reversed words into a string

solution;
function reverse(string) {
  return string.split(" ").reverse().join(" ");
}
