const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  if (!matrix.length) {
    return 0;
  }
  let sum = 0;
  let len = matrix[0].length;
  for (let i = 0; i < len; i++) {
    let j = 0;
    while (j < matrix.length && matrix[j][i]) {
      sum += matrix[j][i];
      j++;
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
