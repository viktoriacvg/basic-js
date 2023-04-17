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
  if (typeof sampleActivity != "string") return false;
  if (arguments.length == 0) return false;
  if (!(parseInt(sampleActivity))) return false;
  if (parseInt(sampleActivity) >= 15) return false;
  if (parseInt(sampleActivity) <= 0) return false;

  sampleActivity = +sampleActivity;
  if (!Number.isFinite(sampleActivity)) return false;

  let k = 0.693;

  let result = Math.log(MODERN_ACTIVITY/sampleActivity) / (k/HALF_LIFE_PERIOD);

  return Math.ceil(result);
}

module.exports = {
  dateSample
};
