/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

Parameter
Array of Numbers

Result
A string

Example
isSortedAndHow([1, 2]), 'yes, ascending'

Pseudocode
1. Strings can be compared unlike arrays
2. Turn the parameter into a string and store in a variable
3. Sort the parameter in ascending order and store in another variable as a string
4. Sort the parameter in descending order and store in another variable as a string
5. Compare the first variable to the rest and return the accompaning string


*/

solution

function isSortedAndHow(array) {
    const string = array.join('');
     const ascending = array.sort((a, b) => a - b).join('');
     const descending = array.sort((a, b) => b - a).join('');
     return string == ascending
       ? 'yes, ascending'
       : string == descending
       ? 'yes, descending'
       : 'no';
   }