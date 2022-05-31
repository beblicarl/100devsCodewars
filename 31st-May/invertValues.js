// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

solution;

//pseudo code
// loop through the array and negate the values

function invert(array) {
  return array.map((x) => -x);
}

console.log([1, 2, 3, 4, -5, 6, -7, -8, -9, -10]);
