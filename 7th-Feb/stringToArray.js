/*

Write a function to split a string and convert it into an array of words.

Parameters
String

Result
Array of string

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

Pseudocode
Use the split method
return the resultsf
*/

solution

function stringToArray(string){
	return string.split(" ")
}

