const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((sum,a) => sum + a, 0);
};

const multiply = function(array) {
  return array.reduce((multiply,a) => multiply * a, 1);
};

const power = function(a,b) {
  let result = a;
	for (let i=1; i<b; i++) {
    result *= a;
  };

  return result;
};

const factorial = function(a) {
	let result = a;

  if (a == 0) {
    result = 1;
  }else {
    for (let i=a-1; i>=1; i--) {
      result *= i;
    };
  }

  return result;
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
