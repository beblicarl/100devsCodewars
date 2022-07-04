/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]

Parameters
Numbers

Result
Array of Numbers

Examples
getSize(4, 2, 6), [88, 48]);   
getSize(10, 10, 10), [600, 1000]);
getSize(4, 2, 6)[0], 88);
getSize(4, 2, 6)[1], 48);

Pseudocode
1.Return the surface area of a box , volume of the box

*/

solution;
function getSize(width, height, depth) {
  return [
    2 * depth * width + 2 * depth * height + 2 * width * height,
    width * height * depth,
  ];
}
