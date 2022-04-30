const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  for (let index = 0; index < names.length-1; index++) {
    let count = 1;
    for (let index2 = index+1; index2 < names.length; index2++) {
      if (names[index] == names[index2]) {
        names[index2] += `(${count})`;
        count++;
      }
    }
  }
  return names;
}

module.exports = {
  renameFiles
};
