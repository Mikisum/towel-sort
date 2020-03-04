
module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) || !matrix.length) return [];
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
          matrix[i].reverse();
      } 
      result = result.concat(matrix[i]);
  }
  return result;
}
