/*

Complete the solution so that the function will break up camel casing,
 using a space between words.

Parameters
String

Result
String


Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

Pseudocode
1.Create a variable and split string
2. iterate through the elements of the array and if any element is in uppercase you return space + that element
3. Return the elements
4. return a string join
*/

solution;
// complete the function
function solution(string) {
  string = string.split("").map((x) => {
    if (x == x.toUpperCase()) {
      x = " " + x;
    }
    return x;
  });
  return string.join("");
}
