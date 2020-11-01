const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === 'string') {
    let number = parseFloat(sampleActivity);
    if (!isNaN(number)) {
     if (number <= 0 || number > 15) {
       return false
     } else {
         return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / 0.693 * HALF_LIFE_PERIOD);
         }
           } else {
           return false
         }
      } else {
              return false
              }
};
