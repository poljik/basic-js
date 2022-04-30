const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrIndexOne = [];
  let temp = [];
  arr.forEach((element, index) => {
    if (element == -1) {
      arrIndexOne.push(index);
    } else {
      temp.push(element);
    }
  });
  temp.sort((a,b) => {return a - b});
  if (arrIndexOne.length == 0) {
    arr.sort((a,b) => {return a - b});
  } else {
    let current = arrIndexOne.pop();
    for (let index = arr.length-1; index >= 0; index--) {
      if (index == current) {
        arr[index] = -1;
        current = arrIndexOne.pop();
      } else {
        arr[index] = temp.pop();
      }
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
