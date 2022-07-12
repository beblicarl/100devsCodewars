/*
In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

You can define the object attributes during initialization, like this:

var animal={name:"dog"}
you can also set/get some properties after the object definition, like this:

var animal={}
animal.name="dog"  (or animal["name"]="dog")
Task
Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."

Parameter
Object

Result
String

Example
animal({name:"dog",legs:4,color:"white"}),"This white dog has 4 legs.");
animal({name:"cock",legs:2,color:"red"}),"This red cock has 2 legs.");
animal({name:"rabbit",legs:4,color:"gray"}),"This gray rabbit has 4 legs.");

Pseudocode
1. Use template strings and call the object properties at the appropriate locations
*/

solution;
function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
