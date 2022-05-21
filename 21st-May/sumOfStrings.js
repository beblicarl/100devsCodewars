// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

solution;

function sumStr(a, b) {
  let sum = Number(a) + Number(b);
  return sum.toString();
}

function sumStr(a, b) {
  return String(Number(a) + Number(b));
}

function sumStr(a, b) {
  return +a + +b + "";
}
