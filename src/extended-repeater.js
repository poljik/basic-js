const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (Object.prototype.toString.call(str) === '[object Null]') {
     str = 'null';
  }
  str = `${str}`;
  let repeatTimes = 1;
  if (arguments[1].repeatTimes) {
    repeatTimes = arguments[1].repeatTimes;
  }
  let separator = '+';
  if (arguments[1].separator) {
    separator = arguments[1].separator;
  }
  
  let addition = '';
  if (arguments[1].addition || Object.prototype.toString.call(arguments[1].addition) === '[object Boolean]' ) {
    addition = arguments[1].addition;
  }
  if (Object.prototype.toString.call(arguments[1].addition) === '[object Null]') {
    addition = 'null';
  }
  addition = `${addition}`;
  let additionRepeatTimes = 1;
  if (arguments[1].additionRepeatTimes) {
    additionRepeatTimes = arguments[1].additionRepeatTimes;
  }
  let additionSeparator = '|';
  if (arguments[1].additionSeparator) {
    additionSeparator = arguments[1].additionSeparator;
  }
  
  let res = '';
  for (let index = 0; index < repeatTimes; index++) {
    res += str;
    for (let index2 = 0; index2 < additionRepeatTimes; index2++) {
      if (addition) {
        res += addition;
      }
      if (index2 !== (additionRepeatTimes-1)) {
        res += additionSeparator;
      }
    }
    if (index !== (repeatTimes-1)) res += separator;
  }
  return res;
}

module.exports = {
  repeater
};
