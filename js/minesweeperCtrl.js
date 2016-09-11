/* Minesweeper Controller*/
angular.module('index').controller('MinesweeperCtrl',  function ($scope, $http) {
    function createMinefield(height, width) {
        var minefield = {};
        minefield.rows = [];
    
        for(var i = 0; i < height; i++) {
            var row = {};
            row.spots = [];
            for(var j = 0; j < width; j++) {
                var spot = {};
                spot.flag = false;
                spot.isCovered = true;
                spot.content = "empty";
                spot.x = i;
                spot.y = j;
                row.spots.push(spot);
            }
            minefield.rows.push(row);
        }
        return minefield;
    }

    function getSpot(minefield, row, column) {
        return minefield.rows[row].spots[column];
    }

    function placeRandomMine(minefield) {
        var row = Math.round(Math.random() * (minefield.rows.length-1));
        var column = Math.round(Math.random() * (minefield.rows[0].spots.length-1));
        var spot = getSpot(minefield, row, column);
        if (spot.content != "mine")
            spot.content = "mine";
        else
            placeRandomMine(minefield);
    }

    function placeManyRandomMines(num, minefield) {
        for (var i = 0; i < num; i++) {
            placeRandomMine(minefield);
        }
    }

    function calculateNumber(minefield, row, column) {
        var thisSpot = minefield.rows[row].spots[column];
        var height = minefield.rows[0].spots.length;
        var width = minefield.rows.length;
        var mineCount = 0;

        function checkForMine(x,y) {
            if (minefield.rows[x].spots[y].content == "mine") {
                mineCount++;
            }
        };

        if (thisSpot.content == "mine") { //return if mine
            return;
        };

        if (row > 0) {
            if (column > 0) {
                checkForMine(row - 1, column - 1); //top left
            }
            checkForMine(row - 1, column); //top
            if (column < height-1) {
                checkForMine(row - 1, column + 1); //top right
            }
        }
        if (column > 0) {
            checkForMine(row, column - 1); //left
        }
        if (column < height-1) {
            checkForMine(row, column + 1); //right
        }
        if (row < width - 1) {
            if (column > 0) {
                checkForMine(row + 1, column - 1); //bottom left
            }
            checkForMine(row + 1, column); //bottom
            if (column < height - 1) {
                checkForMine(row + 1, column + 1); //bottom right
            }
        }
        if (mineCount > 0) {
            thisSpot.content = mineCount;
        }
    }

    function calculateAllNumbers(minefield) {
        for (var y = 0; y < minefield.rows[0].spots.length; y++) {
            for (var x = 0; x < minefield.rows.length; x++) {
                calculateNumber(minefield, x, y);
            }
        }
    }

    function freebie(minefield) {
        for (var y = 0; y < minefield.rows[0].spots.length; y++) {
            for (var x = 0; x < minefield.rows.length; x++) {
                if (minefield.rows[x].spots[y].content == "empty") {
                    minefield.rows[x].spots[y].isCovered = false;
                    revealEmpty(minefield, x, y);
                    return;
                }
            }
        }
    }

    function hasWon(minefield) {
        for (var y = 0; y < minefield.rows[0].spots.length; y++) {
            for (var x = 0; x < minefield.rows.length; x++) {
                var spot = getSpot(minefield, y, x);
                if (spot.isCovered && spot.content != "mine") {
                    return false;
                }
            }
        }

        return true;
    }

    function revealMines(minefield) {
        for (var y = 0; y < minefield.rows[0].spots.length; y++) {
            for (var x = 0; x < minefield.rows.length; x++) {
                if (minefield.rows[x].spots[y].content == "mine") {
                    minefield.rows[x].spots[y].isCovered = false;
                }
            }
        }
    }

    function revealEmpty(minefield, row, column) {
        var thisSpot = minefield.rows[row].spots[column];
        var height = minefield.rows[0].spots.length;
        var width = minefield.rows.length;
        function checkForEmpty(x, y) {
            if (minefield.rows[x].spots[y].isCovered && minefield.rows[x].spots[y].content != "mine") {
                minefield.rows[x].spots[y].isCovered = false;
                if (minefield.rows[x].spots[y].content == "empty") {
                    revealEmpty(minefield, x, y);
                }
            }
        };

        if (row > 0) {
            if (column > 0) {
                checkForEmpty(row - 1, column - 1); //top left
            }
            checkForEmpty(row - 1, column); //top
            if (column < height - 1) {
                checkForEmpty(row - 1, column + 1); //top right
            }
        }
        if (column > 0) {
            checkForEmpty(row, column - 1); //left
        }
        if (column < height - 1) {
            checkForEmpty(row, column + 1); //right
        }
        if (row < width - 1) {
            if (column > 0) {
                checkForEmpty(row + 1, column - 1); //bottom left
            }
            checkForEmpty(row + 1, column); //bottom
            if (column < height - 1) {
                checkForEmpty(row + 1, column + 1); //bottom right
            }
        }
    };

    $scope.height = 9;
    $scope.width = 9;
    $scope.mines = 10;
    $scope.easyStart = true;
    $scope.start = false;
    $scope.lose = false;
    $scope.win = false;
    $scope.reveal = function (spot) {
        if (!spot.flag && !$scope.lose && !$scope.win) {
            spot.isCovered = false;
            if (spot.content == "mine") {
                $scope.lose = true;
                revealMines($scope.minefield);
            }
            else if (spot.content == "empty") {
                revealEmpty($scope.minefield, spot.x, spot.y);
            }
            if(hasWon($scope.minefield)){
                $scope.win = true;
            }
        }
    };
    $scope.flag = function (spot) {
        if (spot.isCovered && !$scope.lose && !$scope.win) {
            if (spot.flag) {
                $scope.minesLeft++;
                spot.flag = false;
            }
            else {
                $scope.minesLeft--;
                spot.flag = true;
            }
        }
    };
    $scope.startGame = function () {
        $scope.lose = false;
        $scope.win = false;
        $scope.minefield = createMinefield($scope.height, $scope.width);
        $scope.minesLeft = $scope.mines;
        placeManyRandomMines($scope.mines, $scope.minefield);
        calculateAllNumbers($scope.minefield);
        if($scope.easyStart)
            freebie($scope.minefield);
        $scope.start = true;
    };
});