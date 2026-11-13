/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
  let visited = grid.map((row) => row.map((col) => false));
  let number_of_islands = 0;

  const searchRecursive = (grid, i, j) => {
    if (i === 2 && j === 1) {
      console.log("sdfs");
    }
    if (visited[i][j]) {
      return;
    }
    visited[i][j] = true;
    if (
      grid[i + 1] &&
      !visited[i + 1][j] &&
      grid[i + 1][j] &&
      grid[i + 1][j] === "1"
    ) {
      searchRecursive(grid, i + 1, j);
    }
    if (grid[i][j + 1] && !visited[i][j + 1] && grid[i][j + 1] === "1") {
      searchRecursive(grid, i, j + 1);
    }
    if (grid[i][j - 1] && !visited[i][j - 1] && grid[i][j - 1] === "1") {
      searchRecursive(grid, i, j - 1);
    }
    if (
      grid[i - 1] &&
      grid[i - 1][j] &&
      !visited[i - 1][j] &&
      grid[i - 1][j] === "1"
    ) {
      searchRecursive(grid, i - 1, j);
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (visited[i][j] || grid[i][j] === "0") continue;
      if (!visited[i][j] && grid[i][j] === "1") {
        number_of_islands++;
        searchRecursive(grid, i, j);
      }
    }
  }
  return number_of_islands;
};

grid = [
  ["1", "0", "1", "1", "1"],
  ["1", "0", "1", "0", "1"],
  ["1", "1", "1", "0", "1"],
];

console.log(numIslands(grid));
