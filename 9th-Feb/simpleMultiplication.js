/*

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

Parameter
Number

Result
Number

Example
simpleMultiplication(2),16,'Should return given argument times eight...')
simpleMultiplication(1),9, 'Should return given argument times nine...')
simpleMultiplication(8),64,'Should return given argument times eight...')
simpleMultiplication(4),32,'Should return given argument times eight...')
simpleMultiplication(5),45,'Should return given argument times nine...')

Pseudocode
1. Check if number % 2 == 0, if it is, return number * 8 else return number * 9
*/

solution
function simpleMultiplication(number) {
    return number % 2 == 0 ? number * 8 : number * 9
}
