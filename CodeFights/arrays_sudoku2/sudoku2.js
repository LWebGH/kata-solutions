
function sudoku2(grid) {
  let counter = 0;
  let rows = 0;
  const { length } = grid;

  const createSquare = (grid) => {
    const squareGrid = [];
    for (let row = rows * 3; row < rows * 3 + 3; row += 1) {
      for (let column = counter * 3; column < counter * 3 + 3; column += 1) {
        squareGrid.push(grid[row][column]);
      }
    }
    if (counter !== 0 && (counter + 1) % 3 === 0) {
      counter = 0;
      rows += 1;
    } else counter += 1;
    return squareGrid;
  }

  const check = (array) => {
    const set = new Set();
    const { length } = array;
    for (let i = 0; i < length; i += 1) {
      const item = array[i];
      if (item != '.' && set.has(item)) return false;
      else set.add(item);
    }
    return true;
  };

  for (let i = 0; i < length; i += 1) {
    if (!check(grid[i])) return false;
    const column = [];
    for (let j = 0; j < length; j += 1) {
      column.push(grid[j][i]);
    }
    if (!check(column)) return false;
  }
  for (let f = 0; f < 9; f += 1) {
    if (!check(createSquare(grid))) return false;
  }
  return true;
}




