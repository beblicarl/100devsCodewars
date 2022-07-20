/*
Description:
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Parameters
String

Result
String

Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"

Pseudocode
1. Split the string and store it in a variable
2. Filter out elements in the string that is not equal to "!"
3. Join the result back into a string and add "!" to the end
*/

solution;
function remove(string) {
  return (
    string
      .split("")
      .filter((x) => x != "!")
      .join("") + "!"
  );
}

const remove = (s) => s.split("!").join("") + "!";
