/*
Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"

Parameter
Number

Result
String

Example
whatday(1),'Sunday')
whatday(2), 'Monday')
whatday(3),'Tuesday')
whatday(8),  'Wrong, please enter a number between 1 and 7')
whatday(20),  'Wrong, please enter a number between 1 and 7')

Pseudocode
1. Check if the number falls from 1 - 7, if yes, return its corresponding day
2. If number is greater than 7 or less than 1 return "Wrong, please enter a number between 1 and 7"

*/

solution;
function whatday(num) {
  switch (num) {
    case 1:
      return "Sunday";
      break;
    case 2:
      return "Monday";
      break;
    case 3:
      return "Tuesday";
      break;
    case 4:
      return "Wednesday";
      break;
    case 5:
      return "Thursday";
      break;
    case 6:
      return "Friday";
      break;
    case 7:
      return "Saturday";
      break;
    default:
      return "Wrong, please enter a number between 1 and 7";
  }
}

function whatday(num) {
  let days = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  return days[num] || "Wrong, please enter a number between 1 and 7";
}
