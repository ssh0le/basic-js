const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
transform(0);
function transform(arr) {
  if (!(Array.isArray(arr))) {
    //throw new Error('\'arr\' parameter must be an instance of the Array!');
    return '';
  }
  let newArr = arr;
  for (let i = 0; i < newArr.length; i++) {
    if (typeof newArr[i] === 'string') {
      if (newArr[i] === `--discard-next`) {
        if (newArr[i + 1] != undefined) {
          newArr[i + 1] = undefined;
        }
        newArr[i] = undefined;
      }
      if (newArr[i] === `--discard-prev`) {
        if (newArr[i - 1] != undefined) {
          newArr[i - 1] = undefined;
        }
        newArr[i] = undefined;
      }
      if (newArr[i] === `--double-next`) {
        if (newArr[i + 1] != undefined) {
          newArr[i] = newArr[i + 1];
        }
        else {
          newArr[i] = undefined;
        }
      }
      if (newArr[i] === `--double-prev`) {
        if (newArr[i - 1] != undefined) {
          newArr[i] = newArr[i - 1];
        }
        else {
          newArr[i] = undefined;
        }
      }
    }
  }
  return newArr.filter(element => element != undefined);
}

module.exports = {
  transform
};
