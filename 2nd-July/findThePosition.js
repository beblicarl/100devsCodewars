/*
Parameter
String 

Result
String

Example
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

This kata is meant for beginners. Rank and upvote to bring it out of beta


Pseudocode
1. Initialize an array containing all the aplhabets in lowercase
2. Initialize a variable containing the parameter passed in lowercase
3. Match the variable to the index of its position on the array  + 1
4. Return a string stating the position of the aplhabet

*/

solution;

function position(letter) {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let letterToLowerCase = letter.toLowerCase();

  return `Position of alphabet: ${letters.indexOf(letterToLowerCase) + 1}`;
}
