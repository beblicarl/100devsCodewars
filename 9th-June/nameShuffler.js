// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

solution;

//pseudo code
//split the string
//reverse it and join

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

//test case

nameShuffler("Hello John");
