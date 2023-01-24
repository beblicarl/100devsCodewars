/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Parameter
Array of characters

Result
Array of positive numbers


Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

Pseudocode
1. Filter through the list and take out characters that are not strings and greater than zero

*/

solution
function filter_list(l) {
    // Return a new array with the strings filtered out
   const filteredList = l.filter(x => typeof x != "string" && x >= 0)
   return filteredList
  }

  function filter_list(l) {
    return l.filter(v => typeof v == "number")
   }
   function filter_list(l) {
    return l.filter(e => Number.isInteger(e));
  }