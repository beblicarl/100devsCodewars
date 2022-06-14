// Complete the function which converts hex number (given as a string) to a decimal number.

solution;

//pseudo code
//we use parseInt() with a base of 16 to transform a hex string into a number

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}
