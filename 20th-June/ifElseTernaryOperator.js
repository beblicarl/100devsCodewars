// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90

/* 
Parameter 
number - parameter is a number

Result
Number - Result is a number

Example

    saleHotdogs(1),100);
    saleHotdogs(4),400);
    saleHotdogs(5),475);
    saleHotdogs(9),855);
    saleHotdogs(10),900);
    saleHotdogs(100),9000);
  
Pseudocode
1. Check the value of n
2. If n < 5 return n * 100
3. If n >= 5 and n < 10	return n * 95
4. else return n * 90
*/

solution;

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}
