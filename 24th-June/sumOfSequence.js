/*

Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Parameter
Number

Result
Number

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)

Pseudocode
1.Check if begin > end
2. If yes, initialise a variable at 0 loop through with i = begin and i+= steps and add new numbers to the variable
3. Return final value of variable after iteration
4. If begin is not greater than end return 0
*/

solution;
const sequenceSum = (begin, end, step) => {
  var sum = 0;
  for (var i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};
