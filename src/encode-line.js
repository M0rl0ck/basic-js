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
 let result = '', i = 0, num = 1;
 while (i < str.length) {
  if (str[i] === str[i + 1]) {
    num++;
    i++;
  } else {
    result += num > 1 ? (String(num) + str[i]) : str[i];
    num = 1;
    i++;
  }
 }
 return result;
}

module.exports = {
  encodeLine
};
