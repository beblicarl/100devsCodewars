/* Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

Parameters
Numbers

Result
Numbers

Example


Pseudocode
1. Check if the subtraction of damages from health is greater than 0
2. If yes, return health - damages or else return 0

*/

solution;
function combat(health, damage) {
  return health > damage ? health - damage : 0;
}
