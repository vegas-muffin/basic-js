const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("Wrong Array!!!");
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (arr2.length && arr[i-2] !== '--discard-next') arr2.pop();
        break;
      case '--discard-next':
        i++;
        break;
      case '--double-prev':
        if (i && arr[i-2] !== '--discard-next') arr2.push(arr[i-1]);
        break;
      case '--double-next':
        if (i < arr.length-1){} arr2.push(arr[i+1]);
        break;
      default:
        arr2.push(arr[i]);
    };
  };
  return arr2;
};
