const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  if (matrix.length === 0) {
    return count;
  }
  let cat = '^^';
  let len = matrix[0].length;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < len; j++) {
      if (matrix[i][j] === cat) {
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};
