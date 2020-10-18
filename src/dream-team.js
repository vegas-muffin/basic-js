const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  if (members === undefined ||members === null ||   members.length === 0) { 
    return false;
  } else {
for (let i=0; i<members.length; i++) {
    if (typeof(members[i]) === 'string') {
      let str = members[i].trim().toUpperCase();    
      arr.push(str.charAt(0));
      }
  }
  if (arr.length === 0) { return false} else {return arr.sort().join('');}  
  }
};
