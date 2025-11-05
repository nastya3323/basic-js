const { NotImplementedError } = require("../lib");

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
function getMatrixElementsSum(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix[0].length; i += 1) {
    let isZero = false;

    for (let j = 0; j < matrix.length; j += 1) {
      if (!isZero) {
        sum += matrix[j][i];
      }

      if (matrix[j][i] === 0) {
        isZero = true;
      } else {
        isZero = false;
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
