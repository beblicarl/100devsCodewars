/*

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

Parameters
Array , String

Result
Boolean

Example
check([66, 101], 66), true);
check([101, 45, 75, 105, 99, 107], 107), true);
check(['t', 'e', 's', 't'], 'e'), true);
check(['what', 'a', 'great', 'kata'], 'kat'), false);

Pseudocode
1. Use an array method called include to check if the array includes the string

*/

solution
function check(a, x) {
    return a.includes(x)
  }

  function check(a,x){
    return a.indexOf(x)>=0;
  };