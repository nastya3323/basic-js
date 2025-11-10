const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const map1 = {};
  const map2 = {};
  let count = 0;

  for (let i = 0; i < s1.length; i += 1) {
    if (s2.includes(s1[i])) {
      map1[s1[i]] = (map1[s1[i]] || 0) + 1;
    }
  }

  for (let i = 0; i < s2.length; i += 1) {
    if (s1.includes(s2[i])) {
      map2[s2[i]] = (map2[s2[i]] || 0) + 1;
    }
  }

  for (let key in map1) {
    count += Math.min(map1[key], map2[key]);
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
