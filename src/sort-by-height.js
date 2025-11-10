const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const filtered = arr
    .filter((elem) => {
      return elem !== -1;
    })
    .sort((a, b) => {
      return a - b;
    });

  const result = [];

  let count = 0;

  arr.forEach((elem) => {
    if (elem === -1) {
      result.push(elem);
    } else {
      result.push(filtered[count]);

      count += 1;
    }
  });

  return result;
}

module.exports = {
  sortByHeight
};
