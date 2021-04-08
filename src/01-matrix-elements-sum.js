/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  const array = [];
  let result = 0;

  matrix.forEach((elem) => {
    elem.forEach((item, index) => {
      if (array.includes(index)) {
        return;
      }
      if (item === 0) {
        array.push(index);
      } else {
        result += item;
      }
    });
  });
  return result;
}

module.exports = getMatrixElementsSum;
