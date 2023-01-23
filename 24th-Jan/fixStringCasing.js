/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

Parameter
String of characters

Result
String of characters


Example

For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

Pseudocode
1.Split the string and find the count of the lower case characters and store in a variable
2. Subtract the value from the overall length of string
3. If the count of lower is equal to or higher than upper you return lowecase string else return uppercase characters

*/

solution
function solve(s){
    let upper = s.split("").filter(x => x == x.toUpperCase()).length
    let lower = s.length - upper
    return (lower >= upper)? s.toLowerCase() : s.toUpperCase()
}