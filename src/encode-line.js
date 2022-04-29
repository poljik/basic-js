const { interfaces } = require('mocha');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 1;
  for (let index = 0; index < str.length; index++) {
    if (str[index] == str[index+1]) {
      count++;
    } else {
      if (count > 1) {
        res += count + str[index];
        count = 1;
      } else {
        res += str[index];
      }
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
