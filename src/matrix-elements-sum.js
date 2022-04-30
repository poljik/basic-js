const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let width = matrix[0].length;
  let height = matrix.length;
  let res = 0;
  for (let index = 0; index < width; index++) {
    for (let index2 = 0; index2 < height; index2++) {
      element = matrix[index2][index];
      if (element !== 0) {
        res += element;
      } else {
        break;
      } 
    }
  }
  return res;
}

module.exports = {
  getMatrixElementsSum
};
