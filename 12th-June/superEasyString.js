// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

solution;

//pseudo code
//you check if x is a string
//if x is a string you return error
//if x is not a string you return ( x * 50) + 6

function problem(x) {
  return x === x.toString() ? "Error" : x * 50 + 6;
}

function problem(x) {
  return typeof x === "number" ? x * 50 + 6 : "Error";
}
//test cases
problem("hello");
problem(5);
problem("heya");
