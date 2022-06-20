// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Parameter
// String - Parameter is a String
//
// Result
// String - result is a new string from the old string
//
// Example
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
//
// Pseudocode
// 1.Check if the last element of the string is equal to an exclamation mark
// 2. If yes then we slice from the zeroth index to the exclamation mark
// 3. if not then we return the entire string
//
//

solution;

function remove(string) {
  return string[string.length - 1] == "!"
    ? string.slice(0, string.length - 1)
    : string;
}
