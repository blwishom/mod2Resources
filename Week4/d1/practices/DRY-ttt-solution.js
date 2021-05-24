// Tic-tac-toe solver

// DRY UP THIS CODE
function checkWin(grid) {

    for (let row = 0 ; row < 3 ; row++) {
      if (grid[row][0] !== ' ' &&
          grid[row][0] === grid[row][1] &&
          grid[row][0] === grid[row][2])
      {
        return grid[row][0];
      }
    }

    // Check verticals
    for (let col = 0 ; col < 3 ; col++) {
      if (grid[0][col] !== ' ' &&
          grid[0][col] === grid[1][col] &&
          grid[0][col] === grid[2][col])
      {
        return grid[0][col];
      }
    }

    // Check diagonals
    if (grid[1][1] !== ' ' &&
        ((grid[1][1] === grid[0][0] &&
          grid[1][1] === grid[2][2]) ||
         (grid[1][1] === grid[0][2] &&
          grid[1][1] === grid[2][0])))
    {
        return grid[1][1];
    }

    // Check if any moves are possible
    for (let row = 0 ; row < 3 ; row++) {
      for (let col = 0 ; col < 3 ; col++) {
        if (grid[row][col] === ' ') return false;
      }
    }

    return 'T';

}




// TESTS
// DO NOT MODIFY BELOW THIS LINE

let grid;

grid = [[' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']]

console.log(`${checkWin(grid)} should be false`);


grid = [['X','X','X'],
        [' ',' ',' '],
        [' ',' ',' ']]

console.log(`${checkWin(grid)} should be X`);

grid = [[' ',' ',' '],
        ['O','O','O'],
        [' ',' ',' ']]

console.log(`${checkWin(grid)} should be O`);


grid = [[' ',' ',' '],
        [' ',' ',' '],
        ['X','X','X']]

console.log(`${checkWin(grid)} should be X`);



grid = [['X',' ',' '],
        ['X',' ',' '],
        ['X',' ',' ']]

console.log(`${checkWin(grid)} should be X`);

grid = [[' ','O',' '],
        [' ','O',' '],
        [' ','O',' ']]

console.log(`${checkWin(grid)} should be O`);


grid = [[' ',' ','X'],
        [' ',' ','X'],
        [' ',' ','X']]

console.log(`${checkWin(grid)} should be X`);


grid = [['X',' ',' '],
        [' ','X',' '],
        [' ',' ','X']]

console.log(`${checkWin(grid)} should be X`);

grid = [[' ',' ','O'],
        [' ','O',' '],
        ['O',' ',' ']]

console.log(`${checkWin(grid)} should be O`);


grid = [['X','O','X'],
        ['X','O','O'],
        ['O','X','O']]

console.log(`${checkWin(grid)} should be T`);

grid = [['X','X',' '],
        ['X','O','O'],
        ['O','X','O']]

console.log(`${checkWin(grid)} should be false`);






