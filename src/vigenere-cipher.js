const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  constructor(onOff = true) {
    this.reverse = onOff;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Error encrypt!!!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let counter = 0;

    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        let globalCode = message.charCodeAt(i);
        let codeNew = counter % key.length;
        let betta = key.charCodeAt(codeNew);
        result += String.fromCharCode(((globalCode + betta) % 26) + 65);
        counter++;
      } else {
        result += message.charAt(i);
      }
    }
    if (this.reverse) {
      return result;
    } else {
      return result.split("").reverse().join("");
    }
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Error decrypt!!!");
    }
    let result = "";
    message = message.toUpperCase();
    key = key.toUpperCase();
    let counter = 0;
    for (let j = 0; j < message.length; j++) {
      let code = message.charCodeAt(j);
      if (code >= 65 && code <= 90) {
        let inputKey = code - 65;
        let codeNew = counter % key.length;
        let inputChar = key.charCodeAt(codeNew) - 65;
        let all = (inputKey + (26 - inputChar)) % 26;
        result += String.fromCharCode(65 + all);
        counter++;
      } else {
        result += message[j];
      }
    }
    if (this.reverse) {
      return result;
    } else {
      return result.split("").reverse().join("");
    }
  }
}
module.exports = VigenereCipheringMachine;

