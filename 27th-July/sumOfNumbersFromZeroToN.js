/*
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0


Parameters
Number

Result
String

Example
SequenceSum.showSequence(6),"0+1+2+3+4+5+6 = 21")

Pseudocode
1. Initialize an empty array and assign 0 to a variable
2. If the value of count is greater than zero
2. Loop through a number and push the count of the number to the array
3. Push the sum of the elements in the loop to the variable
4. If the value of count is less than zero return count <0
5. If count is equal to zero return 0=0
*/

solution;
var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count > 0) {
      let sum = 0;
      let array = [];
      for (let i = 0; i <= count; i++) {
        array.push(i);
        sum += i;
      }
      return array.join("+") + " " + "=" + " " + sum;
    } else if (count < 0) {
      return "" + count + "<0";
    } else {
      return "0=0";
    }
  };

  return SequenceSum;
})();
