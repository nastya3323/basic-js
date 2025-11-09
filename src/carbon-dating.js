const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (isFinite(sampleActivity) && typeof sampleActivity === 'string') {
    const ln = 0.693;
    const t =
      (HALF_LIFE_PERIOD / ln) * Math.log(MODERN_ACTIVITY / sampleActivity);

    if (t > 0 && isFinite(t)) {
      return Math.ceil(t);
    }
  }

  return false;
}

module.exports = {
  dateSample,
};
