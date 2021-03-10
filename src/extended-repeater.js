 const CustomError = require("../extensions/custom-error");

      module.exports = function repeater(str, options) {
        if (!options.hasOwnProperty("separator")) options.separator = "+";
        if (!options.hasOwnProperty("additionSeparator"))
          options.additionSeparator = "||";

        if (
          options.hasOwnProperty("repeatTimes") &&
          options.repeatTimes == undefined
        ) {
          options.repeatTimes = 1;
        }
        if (
          options.hasOwnProperty("additionRepeatTimes") &&
          options.additionRepeatTimes == undefined
        ) {
          options.additionRepeatTimes = 1;
        }
        if (options.hasOwnProperty("addition") && options.addition == null) {
          options.addition = "null";
        }

        let arr = Array(options.additionRepeatTimes)
          .fill()
          .map((i) => options.addition);
        let str2 = arr.join(options.additionSeparator);

        let resolve = Array(options.repeatTimes)
          .fill()
          .map((i) => str + str2);

        return resolve.join(options.separator);
      };
