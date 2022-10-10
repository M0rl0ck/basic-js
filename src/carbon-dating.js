const { NotImplementedError } = require('../extensions/index.js');

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
  if (!sampleActivity) {
    return false;
  }
  if (typeof sampleActivity != "string") {
    return false;
  }

  let activity = parseFloat(sampleActivity, 10);
  if (isNaN(activity) || activity >= MODERN_ACTIVITY) {
    return false;
  }
  let result = Math.ceil(
    (HALF_LIFE_PERIOD / 0.693) * Math.log(MODERN_ACTIVITY / activity)
  );
  if (result === Infinity || isNaN(result)) {
    return false;
  }
  return result;
}

module.exports = {
  dateSample
};
