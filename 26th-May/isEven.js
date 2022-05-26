// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

//pseudo code
//we check if n % 2 is equal to 0. if yes then we return true and if not we return false

solution;

function testEven(n) {
  return n % 2 === 0 ? true : false;
}
