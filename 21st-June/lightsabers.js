/*

Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

Parameter
String - name of programmers

Result
Number

Example
howManyLightsabersDoYouOwn(), 0 )
howManyLightsabersDoYouOwn("Adam"), 0 )
howManyLightsabersDoYouOwn("Zach"), 18 )

Pseudocode
1. If name is not equal to Zach return 0 or else 18
*/

solution;
function howManyLightsabersDoYouOwn(name) {
  return name != "Zach" ? 0 : 18;
}
