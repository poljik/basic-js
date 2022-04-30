const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let txt = n.toString();
  while (txt.length > 1) {
    n = 0;
    for (let index = 0; index < txt.length; index++) {
      n += Number.parseInt(txt[index]);
    }
    txt = n.toString();
  }
  return n;
}

module.exports = {
  getSumOfDigits
};
