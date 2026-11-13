var spiralOrder = function (matrix) {
  const flatMap = matrix.flat();

  let i = 0;
  let j = 0;

  const res = [matrix[i][j]];
  matrix[i][j] = "#";

  for (k = 0; k < flatMap.length; k++) {
    // Go right
    while (matrix[i][j + 1] != undefined && matrix[i][j + 1] !== "#") {
      res.push(matrix[i][++j]);
      matrix[i][j] = "#";
    }
    // Go Down
    while (
      matrix[i + 1] &&
      matrix[i + 1][j] != undefined &&
      matrix[i + 1][j] !== "#"
    ) {
      res.push(matrix[++i][j]);
      matrix[i][j] = "#";
    }
    // Go Left
    while (matrix[i][j - 1] != undefined && matrix[i][j - 1] !== "#") {
      res.push(matrix[i][--j]);
      matrix[i][j] = "#";
    }
    // Go Up
    while (
      matrix[i - 1] &&
      matrix[i - 1][j] != undefined &&
      matrix[i - 1][j] !== "#"
    ) {
      res.push(matrix[--i][j]);
      matrix[i][j] = "#";
    }
  }
  return res;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
