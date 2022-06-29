/*
Parameters
String, Numbers

Result
Numbers

Example
basicOp('+', 4, 7), 11);
basicOp('-', 15, 18), -3);
basicOp('*', 5, 5), 25);
basicOp('/', 49, 7), 7);

Pseudocode
1. Check the values of the operations
2. If + add value1 and value 2
2. If - subtract value1 and value2
4. If * multiply value1 and value2
5. If /  divide value1 and value2
*/

solution;
const basicOp = (operation, value1, value2) =>
  ({
    "+": value1 + value2,
    "-": value1 - value2,
    "*": value1 * value2,
    "/": value1 / value2,
  }[operation]);
