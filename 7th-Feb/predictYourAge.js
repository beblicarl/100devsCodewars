/*

My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!


Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.

Parameters
Numbers

Result
Number


Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.


Pseudocode
Take a list of ages when each of your great-grandparent died and store in an array.
Multiply each number by itself using map method.
Add them all together using reduce method.
Take the square root of the result using Math.sqrt.
Divide by two.
Return the the nearest integer of the result 
*/

solution

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    const newArray = [age1,age2,age3,age4,age5,age6,age7,age8]
    const multiplyBySelf = newArray.map(x => x * x)
    const sum = multiplyBySelf.reduce((a , c) => a + c, 0)
    const squareRoot = Math.sqrt(sum)
    return Math.trunc(squareRoot / 2)
  }

