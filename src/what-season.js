const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let lastDay = (new Date(year,month+1,0)).getDate();
    console.log(day, lastDay);
    if (day < lastDay) {
      month++;
    }
    if (month >=2 && month <=4) return 'spring';
    if (month >=5 && month <=7) return 'summer';
    if (month >=8 && month <=10) return 'autumn';
    return 'winter';
  } else if (!date) {
    return 'Unable to determine the time of year!';
  } else {
    throw Error ('Invalid date!');
  }
}

let k = getSeason(new Date(2020, 1, 30, 3, 0, 11, 500));
console.log(k)

module.exports = {
  getSeason
};
