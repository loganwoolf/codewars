/* eslint-disable max-len */
/*
Write a function that determines whether a string is a valid guess in a Boggle board, as per the rules of Boggle. A Boggle board is a 2D array of individual characters, e.g.:

[ ["I","L","A","W"],
  ["B","N","G","E"],
  ["I","U","A","O"],
  ["A","S","R","L"] ]
Valid guesses are strings which can be formed by connecting adjacent cells (horizontally, vertically, or diagonally) without re-using any previously used cells.

For example, in the above board "BINGO", "LINGO", and "ILNBIA" would all be valid guesses, while "BUNGIE", "BINS", and "SINUS" would not.

Your function should take two arguments (a 2D array and a string) and return true or false depending on whether the string is found in the array as per Boggle rules.

Test cases will provide various array and string sizes (squared arrays up to 150x150 and strings up to 150 uppercase letters). You do not have to check whether the string is a real word or not, only if it's a valid guess.
*/

function checkWord(board, word) {
  // find all instances of first letter
  const initialPositions = [];

  for (const row in board) {
    for (const column in board[+row]) {
      if (board[+row][+column] === word[0]) {
        initialPositions.push([+row, +column]);
      }
    }
  }

  // search neighbours for nth letter
  function searchNeighbours(
    position,
    currentSearchedPositions = [position],
    currentLetterIndex = 1,
  ) {
    // define limits of search
    const firstSearchRow = position[0] === 0 ? 0 : position[0] - 1;
    const firstSearchCol = position[1] === 0 ? 0 : position[1] - 1;
    const lastSearchRow =
      position[0] === board.length - 1 ? board.length - 1 : position[0] + 1;
    const lastSearchCol =
      position[1] === board.length - 1 ? board.length - 1 : position[1] + 1;

    for (let row = firstSearchRow; row <= lastSearchRow; row++) {
      for (let col = firstSearchCol; col <= lastSearchCol; col++) {
        if (currentLetterIndex >= word.length) {
          return true;
        }
        if (row === position[0] && col === position[1]) {
          continue;
        }
        if (board[row][col] === word[currentLetterIndex]) {
          currentSearchedPositions.push([row, col]);
          currentLetterIndex++;
          return searchNeighbours(
            [row, col],
            currentSearchedPositions,
            currentLetterIndex,
          );
        }
      }
    }
    return false;
  }

  for (const initialPosition of initialPositions) {
    if (searchNeighbours(initialPosition)) {
      return true;
    }
    return false;
  }
}

const testBoard = [
  ['E', 'A', 'R', 'A'],
  ['N', 'L', 'E', 'C'],
  ['I', 'A', 'I', 'S'],
  ['B', 'Y', 'O', 'R'],
];
console.log(checkWord(testBoard, 'LER'));
