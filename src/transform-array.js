const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 if (arr.length === 0) {
    return arr;
  } else if (!Array.isArray(arr)) { 
     throw new Error('Error - Not Array');
  } else {
      let str = arr.toString().split(',');
      let newStr = [];
        for (let i = 0; i < str.length; i++) {
          if (str[i] === "--double-next") {
              let doubleNext = str[i+1];
              newStr.push(doubleNext);
          } else if (str[i] === "--double-prev")  {
              let doublePrev = str[i-1];
              newStr.push(doublePrev);
          } else if (str[i] === "--discard-prev")  {
              let discardPrev = i-1;
              delete newStr[discardPrev];
          } else if (str[i] === "--discard-next")  {
              let discardNext = i+1;
              delete str[discardNext];
          } else {
              newStr.push(str[i]);
          }
          
        }
          function newArr(arr) {
            newStr2 = [];
            for (let i = 0; i < arr.length; i++) {
              if (arr[i] === "--discard-next" || arr[i] === "--discard-prev" || arr[i] === "--double-prev" || arr[i] === "--double-next" || !arr[i]) {
                continue;
              } else {
                newStr2.push(arr[i]);
              }
            }
            // console.log(newStr2);
            return newStr2;
            
          }
          newArr(newStr);
        }
};
