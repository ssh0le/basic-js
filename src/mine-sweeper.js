const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let cols = matrix[0].length;
  let rows = matrix.length;
  let numMatrix = [];
  for(let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(0);
    }
    numMatrix.push(row);
  }
  for(let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j]) {
        if (j - 1 >= 0){
          numMatrix[i][j - 1]++;
        }
        if (j + 1 < cols) {
          numMatrix[i][j + 1]++;
        }
        if (i - 1 >= 0){
          numMatrix[i - 1][j]++;
        }
        if (i + 1 < cols) {
          numMatrix[i + 1][j]++;
        }
        if (j - 1 >= 0 && i - 1 >= 0){
          numMatrix[i - 1][j - 1]++;
        }
        if (j - 1 >= 0 && i + 1 < cols){
          numMatrix[i + 1][j - 1]++;
        }
        if (j + 1 < cols && i + 1 < cols){
          numMatrix[i + 1][j + 1]++;
        }
        if (j + 1 < cols && i - 1 >= 0){
          numMatrix[i - 1][j + 1]++;
        }
      }
    }
  }
  return numMatrix;
}

module.exports = {
  minesweeper
};
