/*

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Parameter
String

Result
Array

Examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]

Pseudocode
1. Initialise an empty array
2. Loop through the words and check if the vowels are included in the word
3. If they are push their index + 1 to the empty array
4. Return the new array

*/

solution;
function vowelIndices(word) {
  let result = [];

  for (i = 0; i < word.length; i++) {
    if ("aeiouyAEIOUY".includes(word[i])) {
      result.push(i + 1);
    }
  }
  return result;
}
