const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(...arg) {
  let array = arg[0];
  let sumArray = 0
  for(let i = 0; i < array.length; i++) {
    sumArray = sumArray + array[i]
  }
  return sumArray;
};

const multiply = function(...arg) {
  let array = arg[0];
  let multiplied = 1;
  for (let i = 0; i < array.length; i++) {
    multiplied = multiplied * array[i]
  }
  return multiplied;
};
multiply([2,4])
multiply([2,4,6,8,10,12,14])

const power = function(num1, num2) {
	return Math.pow(num1,num2);
};
power(4,3)

const factorial = function(num1) {
  if (num1 === 0) {
    return 1;
  }
  let number = 1;
  for(let i = num1; i > 0; i--) {
    number = number * i;
  }
  return number;
};

factorial(5);
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
