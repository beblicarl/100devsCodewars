/*

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

Parameter
Numbers

Result
Boolean

Example
lovefunc(1,4), true)
lovefunc(2,2), false)
lovefunc(0,1), true)
lovefunc(0,0), false)

Pseudocode
1. Check if (flowers1 % 2 == 0 && Flowers2 % 2 != 0) or (flower2 % 2 == 0 && flower1 % 2 != 0)
2. Return true or false based on the result of step 1
*/

solution
function lovefunc(flower1, flower2){
    return (flower1 % 2 == 0 && flower2 % 2 != 0) || (flower2 % 2 == 0 && flower1 % 2 != 0) ? true : false ; 
  }

  function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  }