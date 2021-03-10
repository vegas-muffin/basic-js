      const CustomError = require("../extensions/custom-error");

      module.exports = class DepthCalculator {
        calculateDepth(arr) {
          if (arr.some((itemArr) => Array.isArray(itemArr))) {
            let newArr = arr.flat();
            return 1 + this.calculateDepth(newArr);
          }
          return 1;
        }
      };
