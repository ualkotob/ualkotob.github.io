/* Minesweeper Controller*/

angular.module('index').controller('MinesweeperCtrl',  function ($scope, $http) {
    function createMinefield() {
        var minefield = {};
        minefield.rows = [];
    
        for(var i = 0; i < 9; i++) {
            var row = {};
            row.spots = [];
        
            for(var j = 0; j < 9; j++) {
                var spot = {};
                spot.isRevealed = false;
                spot.isCovered = true;
                row.spots.push(spot);
            }
        
            minefield.rows.push(row);
        }
    
        return minefield;
    }
    
    $scope.minefield = createMinefield();
});