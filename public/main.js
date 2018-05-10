function createGrid() {
  var minefield = {};
  minefield.rows = [];
  
  for(var i = 0; i < 9; i++) {
      var row = {};
      row.squares = [];
      
      for(var j = 0; j < 9; j++) {
          var square = {};
          square.covered = true;
          row.squares.push(square);
      }
      
      minefield.rows.push(row);
  }
  
  return minefield;
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