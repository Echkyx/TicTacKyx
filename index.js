// Function to make a move for the bot (easy level)
function easyBotMove(board) {
  let row, col;
  do {
    row = Math.floor(Math.random() * 3);
    col = Math.floor(Math.random() * 3);
  } while (board[row][col] !== ' ');
  board[row][col] = 'O';
}

// Function to make a move for the bot (hard level)
function hardBotMove(board) {
  // Check if the bot can win in the next move
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === ' ') {
        board[i][j] = 'O';
        if (checkWin(board, 'O')) {
          return; // Bot wins, no need to continue
        }
        board[i][j] = ' '; // Reset the move
      }
    }
  }

  // Check if the player can win in the next move
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === ' ') {
        board[i][j] = 'X';
        if (checkWin(board, 'X')) {
          board[i][j] = 'O'; // Block player's winning move
          return;
        }
        board[i][j] = ' '; // Reset the move
      }
    }
  }

  // If no winning move, make a random move
  easyBotMove(board);
}

// Function to make a move for the bot (extreme level)
function extremeBotMove(board) {
  // Check if the bot can win in the next move
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === ' ') {
        board[i][j] = 'O';
        if (checkWin(board, 'O')) {
          return; // Bot wins, no need to continue
        }
        board[i][j] = ' '; // Reset the move
      }
    }
  }

  // Check if the player can win in the next move
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === ' ') {
        board[i][j] = 'X';
        if (checkWin(board, 'X')) {
          board[i][j] = 'O'; // Block player's winning move
          return;
        }
        board[i][j] = ' '; // Reset the move
      }
    }
  }

  // If center is empty, take it
  if (board[1][1] === ' ') {
    board[1][1] = 'O';
    return;
  }

  // If player is about to win, block them
  if ((board[0][0] === 'X' && board[2][2] === 'X') || (board[0][2] === 'X' && board[2][0] === 'X')) {
    // Take a corner
    let corner = [[0, 0], [0, 2], [2, 0], [2, 2]];
    for (let i = 0; i < corner.length; i++) {
      if (board[corner[i][0]][corner[i][1]] === ' ') {
        board[corner[i][0]][corner[i][1]] = 'O';
        return;
      }
    }
  }

  // If no winning move or blocking move, make a random move
  easyBotMove(board);
}

// Express server setup
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the main directory
app.use(express.static(__dirname));

// Route for serving the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
