/*

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases

Parameters
Numbers

Result
Numbers

Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0
*Use Comparison and Logical Operators.

Pseudocode
1. Return 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
2. Return 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
3. Return 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
4. Else, return 0
*/

solution;
function finalGrade(exam, projects) {
  return exam > 90 || projects > 10
    ? 100
    : exam > 75 && projects >= 5
    ? 90
    : exam > 50 && projects >= 2
    ? 75
    : 0;
}
