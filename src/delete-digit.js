const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nTxt = String(n);
  let array = [];
  for (let index = 0; index < nTxt.length; index++) {
    array.push(nTxt.slice(0,index)+nTxt.slice(index+1,nTxt.length));
  }
  let res = array[0];
  array.forEach(element => {
    if (element > res) {
      res = element;
    }
  });
  return Number(res);
}

module.exports = {
  deleteDigit
};
