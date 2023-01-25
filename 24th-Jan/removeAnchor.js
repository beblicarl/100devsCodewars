/*

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Parameter
String -Url

Result

String- Url

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

Pseudocode
1. Split the string with the anchor
2. return the first element of the array
*/

solution
function removeUrlAnchor(url){
    return url.split("#")[0]
  }