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
function deleteDigit( n ) {
  let result = [];
  let temp = n.toString();
  for (let i = 0; i < temp.length; i++) {
    let str = '';
    for (let j = 0; j < temp.length; j++) {
      if (j != i) {
        str += temp[j];
      }
    }
    result.push(Number(str));
  }
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
