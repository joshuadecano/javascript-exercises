const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let temp = 0;
	for (let i = 0; i < a.length; i ++)
    temp += a[i];
  return temp;
};

const multiply = function(a) {
  let temp = 1;
	for (let i = 0; i < a.length; i ++)
    temp *= a[i];
  return temp;
};

const power = function(a, b) {
  return Math.pow(a,b);
};

const factorial = function(a) {
  temp = 1
  if (a == 1 || a == 0) {
    return temp;
  }
  else {
    for (let i = 0; i < a; i++) {
      temp *= (a-i);
    }
    return temp;
  }
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
