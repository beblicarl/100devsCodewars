// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// Parameter
// Number - the inputs are numbers

// Result
// An array of numbers from point a to point b

// Examples

// between( 1, 5) -> [1,2,3,4,5]
// between(5,7) -> [5,6,7]

// Pseudocode
// 1. Initialize an array with the first number
// 2. Initialize a variable with the first number stored
// 3. Write a for loop that loops through the first and last number
// 4. Increment the variable by 1 on each loop
// 5. Push each increment into the array
// 6. Return the array

solution;

function between(a, b) {
  let array = [a];
  let number = a;
  for (let i = a; i < b; i++) {
    number = number + 1;
    array.push(number);
  }
  return array;
}

//good solutions

function between(a, b) {
  // your code here
  arr = [];
  for (i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
