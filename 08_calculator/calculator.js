const add = function(num1 , num2) {
  return num1 + num2;
	
};

const subtract = function(num1 , num2) {
  return num1 - num2;
};

const sum = function(nums) {
  let sum = 0;  
	for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

const multiply = function(nums) {
  let product = 1;
  for(let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }
  return product;

};

const power = function(num,power) {
  return Math.pow(num,power);
	
};

const factorial = function(num) {
  if(num === 0) {
    return 1;
  }
  let product = 1;
  for(let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
