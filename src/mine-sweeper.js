const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let width = matrix[0].length;
  let height = matrix.length;
  let arr = [];
  for (let index = 0; index < height; index++) {
    arr[index] = [];
    for (let index2 = 0; index2 < width; index2++) {
      arr[index][index2] = 0;
    }
  }
  for (let index = 0; index < height; index++) {
    for (let index2 = 0; index2 < width; index2++) {
      if (matrix[index][index2]) {
        if (index-1 >= 0) {
          arr[index-1][index2] += 1;//up
        }
        if (index+1 <= height) {
          arr[index+1][index2] += 1;//down
        }
        if (index2+1 <= width) {
          arr[index][index2+1] += 1;//right
        }
        if (index2-1 >= 0) {
          arr[index][index2-1] += 1;//left
        }
        if (index-1 >= 0 && index2+1 <= width) {
          arr[index-1][index2+1] += 1;//up-right
        }
        if (index-1 >= 0 && index2-1 <= 0) {
          arr[index-1][index2-1] += 1;//up-left
        }
        if (index+1 <= height && index2+1 <= width) {
          arr[index+1][index2+1] += 1;//down-right
        }
        if (index+1 <= height && index2-1 >= 0) {
          arr[index+1][index2-1] += 1;//down-left
        }
      }
    }
  }
  return arr;
}

module.exports = {
  minesweeper
};
