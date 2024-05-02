// Function to make a move for the bot (hard level)
function hardBotMove() {
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
function extremeBotMove() {
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
