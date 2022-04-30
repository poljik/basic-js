const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  let count = 1;
  let array = [];
  for (let index = 0; index < s1.length-1; index++) {
    for (let index2 = index+1; index2 < s1.length; index2++) {
      if (s1[index] == s1[index2]) {
        count++;
        if (index2 == (index+1)) index++;
      }      
    }
    array.push(count, s1[index]);
    count = 1;
  }
  for (let index = 0; index < array.length; index++) {
    count = 0;
    for (let index2 = 0; index2 < s2.length; index2++) {
      if (array[index+1] == s2[index2]) {
        count++;
      }
    }
    res += Math.min(Number(array[index]), count);
    index++;
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
