function createGrid() {
  var minefield = {};
  minefield.rows = [];
  
  for(var i = 0; i < 9; i++) {
      var row = {};
      row.squares = [];
      
      for(var j = 0; j < 9; j++) {
          var square = {};
          square.covered = true;
          square.bomb = false;
          row.squares.push(square);
      }
      
      minefield.rows.push(row);
  }  
  placeAllMines(minefield); 
  
  return minefield;  
}

const  chooseSquare = (minefield, row, column) => {
  return minefield.rows[row].squares[column];
}

const placeMines = (minefield) => {
  var row = Math.round(Math.random() * 8);
  var column = Math.round(Math.random() * 8);
  var square = chooseSquare(minefield, row, column);
  square.bomb = true;
}

const  placeAllMines = (minefield) => {
  for(var i = 0; i < 10; i++) {
      placeMines(minefield);
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