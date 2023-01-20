/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Parameter
Number

Result
Number

Examples 
(input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
Note you should only return a number, the count of divisors. 
The numbers between parentheses are shown only for you to see which numbers are counted in each case.

Pseudocode
1. Initialize an empty array
2. Loop through the value and push values into the array 
3. Filter through the array for numbers that are divisors of n
4. Return te count of those numbers
*/

solution
function getDivisorsCnt(n){
    let number = [];

 for (i = 1; i <= n; i++) {
   number.push(i);
 }

 let filteredArray = number.filter(x => n % x == 0 );

 return filteredArray.length;
}