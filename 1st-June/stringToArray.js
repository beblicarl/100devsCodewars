// Write a function to split a string and convert it into an array of words.

// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]

// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

solution;

function stringToArray(string) {
  return string.split(" ");
}

console.log(stringToArray("I love God"));
console.log(stringToArray("Chelsea is the best club in the world"));
