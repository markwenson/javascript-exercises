const sumAll = function(num1, num2) {

    if(!Number.isInteger(num1) || !Number.isInteger(num2) || 
       num1 < 0 || num2 < 0) {
    return "ERROR";
    }  
    if(num1 > num2) {
      //Ex. (4,1)
      const num3 = num1; //num3 = 4;
      num1 = num2; // num1 = 1;
         num2 = num3; // num2 = 4; 
      // (1,4) Parameters are now in the right order.
    }
    let sum = 0;
    for(let i = num1; i <= num2; i++) {
    sum = sum + i;
    }
    if (num1 === num2) {
      sum = num1 + num2;
    }
     return sum; 
    };

sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;
