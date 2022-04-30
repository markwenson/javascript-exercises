const ftoc = function(fValue) {
  let convert = ((fValue - 32) * 5) / 9; 
  let cValue = Math.round(convert * 10) / 10;
  return cValue;
};

const ctof = function(cValue) {
  let convert = ((cValue * 9) / 5) + 32;
  let fValue = Math.round(convert * 10) / 10;
  return fValue;
};

ctof(-10);



// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
