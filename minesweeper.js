document.addEventListener('DOMContentLoaded', startGame)

var  board = {};
document.addEventListener('click', checkForWin)
document.addEventListener('contextmenu', checkForWin)

function createBoard(num){
  var cells = []
  var cellNum = 0
  for(y = 0; y < num; y ++){
    for(x = 0; x < num; x++){
      cells[cellNum] = {
        row: y,
        col: x,
        isMine: (Math.floor(Math.random() * 3) ) == 2,
        hidden: true
      }
      cellNum ++
    }
  }
  return cells
}

function startGame() {
  board.cells = createBoard(5)
  for (i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }  

  var reset = document.querySelector("#reset")
  reset.addEventListener("click", resetBoard);


  lib.initBoard()
}

function checkForWin() {
  var winCount = 0
  for (var i = 0; i < board.cells.length; i++) {
    var cell = board.cells[i]
    if (cell.isMine == true && cell.isMarked == false) {
    return
    } else if (cell.isMine == false && cell.hidden == true) {
      return
      } else {
        winCount++
      }
    if (winCount == board.cells.length) {
      lib.displayMessage('You Win!')
    }
  }
}

function countSurroundingMines(cell) {
  var count = 0
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine == true) {
      count++
    }
  } 
  return count
}


function resetBoard() {
  document.getElementsByClassName("board")[0].innerHTML = ""
  startGame();
}
