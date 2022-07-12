/*
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here

Parameter
Number

Result
Number

Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3

Pseudocode
1. If n is greater than 13, return n minus 2
2. If n is greater than 1 , return n minus 1
3. If n is equal to 1, return 0
4. Else return n

*/

solution;
function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 1 ? n - 1 : n == 1 ? 0 : n;
}
