
/*// Restart game button
var restart = document.querySelector('#btn')

//grab all the squares
var squares = document.querySelectorAll('td')

//clear all the squares
function clearBoard() {
    for (var i=0; i < squares.length; i++){
        squares[i].textContent = '';
    }
}

restart.addEventListener('click',clearBoard);


//check the square marker
function changeMarker(){
    if(this.textContent === ''){
        this.textContent = 'X';

    }else if(this.textContent === 'X' ){
        this.textContent = 'O';
    }else{
        this.textContent = '';
    }
}

for(var i =0; i< squares.length; i++){
    squares[i.addEventListener('click',changeMarker)]
}
//for loop to add event listeners to all the squares*/

var currentPlayer = 'X';
    var gameBoard = ['', '', '', '', '', '', '', '', ''];
    var gameOver = false;

    // Restart game button
    var restart = document.querySelector('#btn');
    restart.addEventListener('click', initializeGame);

    // grab all the squares
    var squares = document.querySelectorAll('td');

    function initializeGame() {
      currentPlayer = 'X';
      gameBoard = ['', '', '', '', '', '', '', '', ''];
      gameOver = false;
      document.getElementById('message').textContent = '';
      for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
        squares[i].addEventListener('click', handleMove);
      }
    }

    initializeGame();

    function handleMove() {
      var index = Array.from(squares).indexOf(this);

      if (gameBoard[index] === '' && !gameOver) {
        gameBoard[index] = currentPlayer;
        this.textContent = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }

    function checkWin() {
      const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          document.getElementById('message').textContent = 'Player ' + currentPlayer + ' wins!';
          gameOver = true;
          return;
        }
      }

      if (!gameBoard.includes('')) {
        document.getElementById('message').textContent = "It's a draw!";
        gameOver = true;
      }
    }