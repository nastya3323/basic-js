const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes,
    additionSeparator = '|',
  } = options;

  if (addition && !additionRepeatTimes) {
    additionRepeatTimes = 1;
  }

  let result = '';

  let intermediateStr = String(str);

  let j = 0;

  while (j < additionRepeatTimes) {
    intermediateStr += addition;

    if (j !== additionRepeatTimes - 1) {
      intermediateStr += additionSeparator;
    }

    j += 1;
  }

  let i = 0;

  while (i < repeatTimes) {
    result += intermediateStr;

    if (i !== repeatTimes - 1) {
      result += separator;
    }
    i += 1;
  }

  return result;
}

module.exports = {
  repeater
};
