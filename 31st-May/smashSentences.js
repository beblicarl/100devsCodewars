// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

solution;

//pseudo code
//return the words joined by an empty space

function smash(words) {
  return words.join(" ");
}

console.log(words(["hello", "world", "this", "is", "great"]));
