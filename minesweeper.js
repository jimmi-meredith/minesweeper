document.addEventListener('DOMContentLoaded', startGame)

var board = {
  cells: [
    {
      row: 0, 
      col: 0, 
      isMine: true, 
      hidden: true
    },  
    {
      row: 0, 
      col: 1, 
      isMine: false, 
      hidden: true
    }, 
    {
      row: 0, 
      col: 2, 
      isMine: false, 
      hidden: true
    },
    {
      row: 1, 
      col: 0, 
      isMine: false, 
      hidden: true
    },
    {
      row: 1, 
      col: 1, 
      isMine: true, 
      hidden: true
    },    
    {
      row: 1, 
      col: 2, 
      isMine: false, 
      hidden: true
    }, 
    {
      row: 2, 
      col: 0, 
      isMine: false, 
      hidden: true
    },
    {
      row: 2, 
      col: 1, 
      isMine: false, 
      hidden: true
    },
    {
      row: 2, 
      col: 2, 
      isMine: true, 
      hidden: true
    },
  ]
}

function startGame () {
  for (i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }  
  lib.initBoard()
}


document.addEventListener('click', checkForWin)
document.addEventListener('contextmenu', checkForWin)
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var winCount = 0
  for (var i = 0; i < board.cells.length; i++) {
    if (cells.isMine === true && cells.isMarked === false) {
    return
    } else if (cells.isMine === true && cells.hidden === true) {
      return
      } else {
        winCount++
      }
    if (winCount === board.cells.length) {
      lib.displayMessage('You Win!')
    }
  }
}

function countSurroundingMines(cell) {
  var count = 0
  var surrounding = lib.getSurroundingCells(cell['row'], cell['col'])
  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine === true) {
      count++
    }
  } 
  return count
}
