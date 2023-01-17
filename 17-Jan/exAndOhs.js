/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Parameter - It takes a str

Result - It returns a boolean

Example- 

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

Pseudocode
1. Split the string into an array of string
2. Filter the 'o' and store in a variable
3. Filter the 'x' and store in a variable
4. Check if the length of o is equal to the length of x
5. If they are, return true or else you return false

*/

solution

function XO(str) {
 let split = str.split('');
 let o = split.filter((el) => el.toLowerCase() == 'o');
 let x = split.filter((el) => el.toLowerCase() == 'x');
 return x.length == o.length ? true : false
}

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }
  