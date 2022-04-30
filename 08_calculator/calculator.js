const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return  num1 - num2;
};


const sum = function(...arg) {
	const array = arg[0];
  let sumArray = 0;
  for(let i = 0; i < array.length; i++) {
    sumArray = sumArray + array[i];
  }
  return sumArray;
};


const multiply = function(...arg) {
  const array = arg[0];
  let multiArray = 1;
  for(let i = 0; i < array.length; i++) {
    multiArray = multiArray * array[i];
  }
  return multiArray;
};


const power = function(num1, num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num1) {
  if(num1 === 0) {
    return 1;
  }
  let factor = 1;
	for(i = num1; i > 0;i--) {
    factor = factor * i;
  }
  return factor;

};
factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
