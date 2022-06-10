// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

solution;

//pseudo code
//we check if the addition of two sides is greater than the last side
//if yes we return true and not we return false

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
