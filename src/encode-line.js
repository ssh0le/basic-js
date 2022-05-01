const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let res = '';
  let counter = 1;
  let curChar = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (curChar === arr[i]) {
      counter++;
    }
    else {
      res += `${counter === 1 ? '' : counter}${curChar}`;
      counter = 1;
    }
    curChar = arr[i];
  }
  res += `${counter === 1 ? '' : counter}${curChar == undefined ? '' : curChar}`;
  return res;
}

module.exports = {
  encodeLine
};
