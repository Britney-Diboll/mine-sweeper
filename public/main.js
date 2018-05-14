function createGrid() {
  var minefield = {};
  minefield.rows = [];
  
  for(var i = 0; i < 9; i++) {
      var row = {};
      row.squares = [];
      
      for(var j = 0; j < 9; j++) {
          var square = {};
          square.covered = true;
          square.bomb = "empty";
          row.squares.push(square);
      }
      
      minefield.rows.push(row);
  }  
  placeMines(minefield); 
  calculateAllNumbers(minefield);
  return minefield;  
}

const  chooseSquare = (minefield, row, column) => {
  return minefield.rows[row].squares[column];
}

const placeMines = (minefield) => {
  for (var i = 0; i < 10; i++){
  var row = Math.round(Math.random() * 8);
  var column = Math.round(Math.random() * 8);
  var square = chooseSquare(minefield, row, column);
  square.bomb = "mine";
  }
}

function calculateNumber(minefield, row, column) {
  var thisSquare = chooseSquare(minefield, row, column);
  
  // if this spot contains a mine then we can't place a number here
  if(thisSquare.bomb == "mine") {
      return;
  }
  var mineCount = 0;

  // check row above if this is not the first row
  if(row > 0) {
      // check column to the left if this is not the first column
      if(column > 0) {
          // get the spot above and to the left
          var square = chooseSquare(minefield, row - 1, column - 1);
          if(square.bomb == "mine") {
              mineCount++;
          }
      }

      // get the spot right above
      var square = chooseSquare(minefield, row - 1, column);
      if(square.bomb == "mine") {
          mineCount++;
      }

      // check column to the right if this is not the last column
      if(column < 8) {
          // get the spot above and to the right
          var square = chooseSquare(minefield, row - 1, column + 1);
          if(square.bomb == "mine") {
              mineCount++;
          }
      }
  }
  // check column to the left if this is not the first column
  if(column > 0) {
    // get the spot to the left
    var square = chooseSquare(minefield, row, column - 1);
    if(square.bomb == "mine") {
        mineCount++;
    }
}

// check column to the right if this is not the last column
if(column < 8) {
    // get the spot to the right
    var square = chooseSquare(minefield, row, column + 1);
    if(square.bomb == "mine") {
        mineCount++;
    }
}

    // check row below if this is not the last row
    if(row < 8) {
      // check column to the left if this is not the first column
      if(column > 0) {
          // get the spot below and to the left
          var square = chooseSquare(minefield, row + 1, column - 1);
          if(square.bomb == "mine") {
              mineCount++;
          }
      }

      // get the spot right below
      var square = chooseSquare(minefield, row + 1, column);
      if(square.bomb == "mine") {
          mineCount++;
      }

      // check column to the right if this is not the last column
      if(column < 8) {
          // get the spot below and to the right
          var square = chooseSquare(minefield, row + 1, column + 1);
          if(square.bomb == "mine") {
              mineCount++;
          }
      }
  }
  
  if(mineCount > 0) {
      thisSquare.bomb = mineCount;
  }
}

function calculateAllNumbers(minefield) {
  for(var y = 0; y < 9; y++) {
      for(var x = 0; x < 9; x++) {
          calculateNumber(minefield, x, y);
      }
  }
}

angular
  .module("main", [])
  .controller("mainController", ($scope) => {
    $scope.minefield = createGrid();
  }
)

const reset = () => {
  location.reload(forcedReload = true);
}