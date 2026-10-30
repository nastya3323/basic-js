const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const deleted = new Array(arr.length).fill(false);

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (arr[i] === '--discard-next') {
      if (i + 1 < arr.length) {
        deleted[i + 1] = true;
        i++;
      }

      continue;
    }

    if (arr[i] === '--discard-prev') {
      if (i - 1 >= 0 && !deleted[i - 1]) {
        deleted[i - 1] = true;
        result.pop();
      }

      continue;
    }

    if (arr[i] === '--double-next') {
      if (i + 1 >= arr.length) {
        continue;
      }

      value = arr[i + 1];
    }

    if (arr[i] === '--double-prev') {
      if (i - 1 < 0 || deleted[i - 1]) {
        continue;
      }

      value = arr[i - 1];
    }

    if (!deleted[i]) {
      result.push(value);
    }
  }

  return result;
}

module.exports = {
  transform
};
