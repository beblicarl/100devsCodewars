// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

//pseudo code
// write a conditional statement that checks if the modulos of the first paramater by 2 is equal to 0
//and then you find if the modulus of the second paramater by 2 is not equal to zero
//if they are opposite then they attract hence return true if not return false

solution;
//using ternary operator
function lovefunc(flower1, flower2) {
  return (flower1 % 2 === 0 && flower2 % 2 != 0) ||
    (flower1 % 2 != 0 && flower2 % 2 === 0)
    ? true
    : false;
}

//using if conditional
function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}
