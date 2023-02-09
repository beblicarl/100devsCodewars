/*
Build a function that returns an array of integers from n to 1 where n>0.

Parameter
Number

Result
Array - a reversed array

Example : n=5 --> [5,4,3,2,1]

Pseudocode
1. Initialize an empty array
2. Loop through the number and push all values from n to 1 to the array
3. Return the new array

*/

solution
const reverseSeq = n => {
    const array = []
    for(i = n ; i > 0; i--){
      array.push(i)
    }
     return array
  };

