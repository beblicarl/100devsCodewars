/*

You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.

Parameter
String

Result
String

Example
updateLight("green"), "yellow");
updateLight("yellow"), "red");
updateLight("red"), "green");

Pseudocode
1. Check if the string is green and return yellow
2. CHeck if the string is yellow and you return red
3. Or else return green

*/

solution
function updateLight(current) {
  
    return current == 'green' ? 'yellow' :
           current == 'yellow' ? 'red' : 'green'
  
  }

  const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  })[current]