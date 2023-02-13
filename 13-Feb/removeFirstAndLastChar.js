/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

Parameter
String

Result
String

Example
removeChar('eloquent'), 'loquen');
removeChar('country'), 'ountr');
removeChar('person'), 'erso');
removeChar('place'), 'lac');
removeChar('ooopsss'), 'oopss');

Pseudocode
1. Use the slice() string method to remove the first and last character of the string


*/

solution
function removeChar(str){
    return str.slice(1 , str.length - 1 )
    };

function removeChar(str) {
        return str.slice(1, -1);
    }