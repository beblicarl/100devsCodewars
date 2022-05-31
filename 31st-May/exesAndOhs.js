// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

solution;
//pseudo code
//write two function that filters out the exes and ohs and finds their lengths
//compare of the lengths of and if they are the same you return true or else return false

function XO(str) {
  let O = str
    .toLowerCase()
    .split("")
    .filter((x) => x === "o")
    .join("").length;
  let X = str
    .toLowerCase()
    .split("")
    .filter((x) => x === "x")
    .join("").length;
  return O == X ? true : false;
}

console.log(X("oOOOoXXx"));
