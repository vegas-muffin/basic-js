const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let outputA = [];
  let discardDouble = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  for (let i=0; i<arr.length; i++) {
    let pattern = arr[i];
    if (discardDouble.includes(pattern)){
      if (pattern === '--discard-prev') {
        if ((outputA[outputA.length-1] !== undefined)&&(arr[i-1] !== undefined)) {
          if ((outputA[outputA.length-1] === arr[i-1])||((isNaN(outputA[outputA.length-1])) && (isNaN(arr[i-1])))) {
            if (arr[i-2] !== undefined) {
              if (arr[i-2] !== '--discard-next'){
                outputA.pop();
              }
            } else {
              outputA.pop();
            }
          }
        }
      } else if (pattern === '--double-next'){
        if (arr[i+1] !== undefined) {
          outputA.push(arr[i+1]);
        }
      } else if (pattern === '--double-prev'){
        if ((outputA[outputA.length-1] !== undefined)&&(arr[i-1] !== undefined)) {          
          if ((outputA[outputA.length-1] == arr[i-1])||((isNaN(outputA[outputA.length-1])) && (isNaN(arr[i-1])))) {
            if (arr[i-2] !== undefined) {
              if (arr[i-2] !== '--discard-next'){
                outputA.push(arr[i-1]);
              }
            } else {
              outputA.push(arr[i-1]);
            }
          }
        }
      } else if (pattern === '--discard-next'){
          i+=1;      
      }
    } else {  
      outputA.push(pattern);
    }
  }
  return outputA;
};
