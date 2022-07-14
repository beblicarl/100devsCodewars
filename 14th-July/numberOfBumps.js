/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

Parameter
String

Result
String

Examples
bump("n"), "Woohoo!");
bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
bump("______n___n_"), "Woohoo!");

Pseudocode
1. Initialize a variable and split the string, filter out the "n" present into a variable and count the length of the new array and store into the variable
2. If the length is lesser than or equal to 15 return "Woohoo!" else return "Car Dead"
*/

solution;
function bump(x) {
  let numberOfBumps = x.split("").filter((x) => x == "n").length;
  return numberOfBumps <= 15 ? "Woohoo!" : "Car Dead";
}
