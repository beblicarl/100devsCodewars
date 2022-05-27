// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

solution;

//pseudo code
//if the month falls between certain range of values return the corresponding quarter

const quarterOf = (month) => {
  if (month <= 12 && month >= 10) {
    return 4;
  } else if (month <= 9 && month >= 7) {
    return 3;
  } else if (month <= 6 && month >= 4) {
    return 2;
  } else {
    return 1;
  }
};

const quartarOf = (month) => {
  return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
};

const quarteOf = (month) => {
  // Your code here
  return Math.ceil(month / 3);
};
