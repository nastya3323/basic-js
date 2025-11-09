const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  const rows = matrix.length;

  for (let i = 0; i < rows; i += 1) {
    const cols = matrix[i].length;
    const maxCols = cols - 1;
    const maxRows = rows - 1;

    const mines = [];

    for (let j = 0; j < cols; j += 1) {
      let countMine = 0;

      if (i !== 0 && j !== 0) {
        if (matrix[i - 1][j - 1]) {
          countMine += 1;
        }
      }

      if (i !== 0) {
        if (matrix[i - 1][j]) {
          countMine += 1;
        }
      }

      if (j !== 0) {
        if (matrix[i][j - 1]) {
          countMine += 1;
        }
      }

      if (i !== 0 && j !== maxCols) {
        if (matrix[i - 1][j + 1]) {
          countMine += 1;
        }
      }

      if (i !== maxRows && j !== 0) {
        if (matrix[i + 1][j - 1]) {
          countMine += 1;
        }
      }

      if (i !== maxRows && j !== maxCols) {
        if (matrix[i + 1][j + 1]) {
          countMine += 1;
        }
      }

      if (i !== maxRows) {
        if (matrix[i + 1][j]) {
          countMine += 1;
        }
      }

      if (j !== maxCols) {
        if (matrix[i][j + 1]) {
          countMine += 1;
        }
      }

      mines.push(countMine);
    }

    result.push(mines);
  }

  return result;
}

module.exports = {
  minesweeper,
};
