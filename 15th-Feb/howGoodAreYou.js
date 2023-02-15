/*

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


Parameter
Array of Numbers
Number

Result
Boolean

Example
betterThanAverage([2, 3], 5), true);

Pseudocode
1. Average of the elements in the array
2. CHeck if the average value is lesser than yourPoint
3. Return true if it is or return false

*/


solution
function betterThanAverage(classPoints, yourPoints) {
    const averagePoint = classPoints.reduce((a,c) => a + c, 0) / classPoints.length 
    return averagePoint < yourPoints ? true : false
  }


  function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }