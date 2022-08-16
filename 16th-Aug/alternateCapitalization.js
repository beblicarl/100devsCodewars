/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

Parameter
Strings

Result
String

Examples
capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS'])

Pseudocode
1. Create a variable and iterate over the split String and turn the characters with an odd index to uppercase
2. Create a variable and iterate over the split String and turn the characters with an evenindex to uppercase
3. Return an array of both variables
*/

function capitalize(s) {
  const odd = s
    .split("")
    .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l))
    .join("");
  const even = s
    .split("")
    .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l))
    .join("");
  return [even, odd];
}
