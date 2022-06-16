// // Complete the function which converts a binary number (given as a string) to a decimal number.

// Parameters
// String - Parameter is a String

// Result
// Number - Decimal Number

// Example
// binToDec("1010", 2));  // 10

// PseudoCode
// 1. Use parseInt with a base of 2 to give us a decimal Number

solution;
function binToDec(bin) {
  return parseInt(bin, 2);
}
