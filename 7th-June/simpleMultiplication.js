// This kata is about multiplying a given number by eight
// if it is an even number and by nine otherwise.

solution;

//pseudo code
// check the modulus of the number by 2 to confirm if its even
//if it is even you divide it by 8 and if not you divide it by 9

function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8 : number * 9;
}

simpleMultiplication(4);
simpleMultiplication(9);
