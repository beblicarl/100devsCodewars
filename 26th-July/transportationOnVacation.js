/*
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

Parameter
Number

Result
Number

Example
rentalCarCost(3), 100);
rentalCarCost(4), 140);
rentalCarCost(5), 180);
rentalCarCost(6), 220);

Pseudocode
1. Initialise a variable with days * 40
2. Check if the number of days is equal to or greater than 7, if yes, return total - 50
3. Check if the number of days is equal to or greater than 3, if yes, return total - 20

*/
solution;
function rentalCarCost(d) {
  let total = d * 40;
  return d >= 7 ? total - 50 : d >= 3 ? total - 20 : total;
}
