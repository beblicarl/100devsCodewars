/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

Parameters
String

Result
String

Example
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

Pseudocode
1. Return the corresponding string if the card includes a symbol

*/

solution;

function defineSuit(card) {
  if (card.includes("♣")) {
    return "clubs";
  } else if (card.includes("♦")) {
    return "diamonds";
  } else if (card.includes("♥")) {
    return "hearts";
  } else if (card.includes("♠")) {
    return "spades";
  }
}
