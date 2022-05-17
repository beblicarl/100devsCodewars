// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

solution;

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let doubleSonAge = sonYearsOld * 2;
  let howManyMoreYears = doubleSonAge - dadYearsOld;
  let howManyYearsAgo = dadYearsOld - doubleSonAge;

  if (dadYearsOld > doubleSonAge) {
    return howManyYearsAgo;
  } else if (dadYearsOld < doubleSonAge) {
    return howManyMoreYears;
  } else {
    return 0;
  }
}

function twiceAsOld(a, b) {
  return a > 2 * b ? a - 2 * b : 2 * b - a;
}

const twiceAsOld = (d, s) => Math.abs(d - 2 * s);
