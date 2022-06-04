// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

solution;

//pseudo code
//split the string into an array
//filter out the array that is not equal to the exclamation mark
//join the array into a string

function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((x) => x != "!")
    .join("");
}

removeExclamationMarks("I am and best software developer in the world!");
