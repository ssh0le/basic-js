const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  strNum = n.toString();
  let min = strNum[0];
  for (let i = 1; i < strNum.length; i++) {
    if (strNum[i] > min) {
      break;
    }
    min = strNum[i];
  }
  return parseInt(strNum.replace(min, ''));
}

module.exports = {
  deleteDigit
};
