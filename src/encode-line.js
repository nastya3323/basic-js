const { NotImplementedError } = require('../lib');

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
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    let count = 1;

    while (i + 1 < str.length) {
      if (str[i] === str[i + 1]) {
        count += 1;
        i += 1;
      } else {
        break;
      }
    }

    if (count === 1) {
      result += str[i];
    } else {
      result += `${count}${str[i]}`;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
