solution;
function countSheeps(arrayOfSheep) {
  let truth = arrayOfSheep.filter((x) => x == true);
  return truth.length;
}
