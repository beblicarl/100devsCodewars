/*
There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Parameters
Number

Result
Number

Examples
mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free

Pseudocode
1.Initialize a variable and subtract the quantity from quantity/3
2. Return the variable * price

*/

solution;
function mango(quantity, price) {
  let qty = quantity - Math.floor(quantity / 3);
  return qty * price;
}
