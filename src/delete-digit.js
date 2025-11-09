const { NotImplementedError } = require('../lib');

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
function deleteDigit(n) {
  let nToStr = String(n);
  let max = nToStr.slice(1);
  let currentN;

  for (let i = 0; i < nToStr.length; i += 1) {
    currentN = nToStr.slice(0, i) + nToStr.slice(i + 1);

    if (currentN > max) {
      max = currentN;
    }
  }

  return +max;
}

module.exports = {
  deleteDigit,
};
