const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(Array.isArray(arr))) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [];
  for (let index = 0; index < arr.length; index++) {
    switch (arr[index]) {
      case '--discard-next':
        console.log("--discard-next");
        index += 2;
        break;
      case '--discard-prev':
        console.log("--discard-prev");
        if (res.length !== 0) {
          res.pop();
        }
        break;
      case '--double-next':
        console.log("--double-next");
        if (index+1 < arr.length) {
          index++;
          res.push(arr[index]);
          res.push(arr[index]);
        }
        break;
      case '--double-prev':
        console.log("--double-prev");
        if (index !== 0) {
          index--;
          res.push(arr[index]);
          index++;
        }
        break;
      case 'undefined':
        break;
      default:
        console.log('default', index);
        res.push(arr[index]);
        break;
    }
  }
  return res;

  // throw new NotImplementedError('Not implemented');
}
console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));
module.exports = {
  transform
};
