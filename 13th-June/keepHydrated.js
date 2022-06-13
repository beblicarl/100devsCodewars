// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

solution;
//pseudo code
//since he drinks 0.5 litres per hour we multiply time by 0.5 litre
//we use Math.floor to return the least whole number

function litres(time) {
  return Math.floor(time * 0.5);
}

//test cases
litres(9);
litres(3);
