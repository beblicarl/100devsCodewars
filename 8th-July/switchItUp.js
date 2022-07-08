/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

Parameter
Number

Result
String

Example
switchItUp(1),"One");
switchItUp(3),"Three");
switchItUp(5),"Five");

Pseudocode
1. Create an object that calls the string equivalent when a value is passed through
*/

solution;
const switchItUp = (number) =>
  ({
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  }[number]);
