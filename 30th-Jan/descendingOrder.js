/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Parameter
Number

Result
Number - rearranged in descending order

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

Pseudocode
1. Turn the number into a string
2. Split the number into an array of strings
3. Sort the array of string - the default sorting is ascending order
4.Reverse the sorted array
5.Join the array back into a string
6. Return the the value as a number

*/

solution
function descendingOrder(n){
    const string = n.toString().split('').sort().reverse().join('')
    return Number(string)
  }

  function descendingOrder(n) {
    return parseInt(n.toString().split("").sort().reverse().join(""));
  }