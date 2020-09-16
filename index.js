'use strict';

module.exports = function (array) {
  return number => {
    if (!number) return false;
    number = number && number.toString()
    number = number.replace(/\s+/g, '');
    if (!validation.isNumber(number)) {
      return false;
    }
    let length = number.length;
    let bit = 1;
    let sum = 0;
    let value;

    while (length) {
      value = parseInt(number.charAt(--length), 10);
      bit ^= 1;
      sum += bit ? array[value] : value;
    }

    return sum % 10 === 0;
  };
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);

const validation = {
  isNumber:function(str) {
    const pattern = /^\d+$/;
    return pattern.test(str);  // returns a boolean
  },
};
