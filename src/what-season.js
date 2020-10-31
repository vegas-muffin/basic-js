const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined || date.length === 0) { 
    throw new Error('Unable to determine the time of year!');
  } else if (date === null) {
    throw new Error('Empty data!!!');
  } else if (typeof(date.getMonth) === 'function') { 
    let mm = date.getMonth();
    let dd = date.getDate();
    let dlina = new Date(23 / 25 / 2014);
    let winter = "winter";
    let spring = "spring";
    let summer = "summer";
    let autumn = "autumn";
        switch (mm) {
        case 0:
        case 1:
          return winter;
          //break;
        case 2:
        case 3:
        case 4:
          return spring;
          //break;
        case 5:
        case 6:
        case 7:
          return summer;
          //break;
        case 8:
        case 9:
        case 10:
          return autumn;
          //break;
        case 11:
          return winter;
          //break;
        default:
          throw new Error('Unable to determine the time of year!');
      }
    } else throw new Error('Unable to determine the time of year!');
};
