const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length == 0) return {};
  let array = [];
  let str = '';
  domains.forEach(element => {
    array.push(element);
    str = element;
  });
  array.push(str.split('.').pop());
  array.sort((a, b) => a.length - b.length);
  function translate (txt) {
    let txt2 = '';
    let arrayTemp = txt.split('.');
    for (let index = arrayTemp.length-1; index >= 0; index--) {
      txt2 += '.' + arrayTemp[index];
    }
    return txt2;
  }
  let obj = {};
  obj[translate(array[0])] = domains.length; 
  for (let index = 1; index < array.length; index++) {
    const search = array[index];
    let count = 0;
    domains.forEach(element => {
      if (element.includes(search)) count++;
    });
    obj[translate(search)] = count;
  }
  return obj;
}

module.exports = {
  getDNSStats
};
