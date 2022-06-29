/*
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");


Pseudocode
Undifined , String

Result
String

Example
ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"

Pseudocode
1.Check value of string, if its undefined return "regular" else "super"

*/

solution;
var Ball = function (ballType) {
  if (!ballType) {
    this.ballType = "regular";
  } else {
    this.ballType = "super";
  }
};
