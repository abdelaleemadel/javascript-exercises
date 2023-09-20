const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = arr => arr.reduce((total, element) => total + element, 0);


const multiply = arr => arr.reduce((total, element) => total * element);

const power = (a, b) => a ** b;

const factorial = function (number) {
  if (number == 0 || number == 1) {
    return 1
  } else {
    return number * factorial(number - 1)
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
