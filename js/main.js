/* Main AngularJS Web Application*/
var app = angular.module('index', ['ngRoute', 'ngSanitize']);

/* Configure the Routes*/
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "./partials/home.html"})
    // Pages
    .when("/about", { templateUrl: "partials/about.html"})
    .when("/projects", { templateUrl: "partials/projects.html", controller: "ProjectCtrl" })
    .when("/tutorials", { templateUrl: "partials/tutorials.html", controller: "TutorialCtrl" })
    .when("/contact", { templateUrl: "partials/contact.html"})
    .when("/thanks", { templateUrl: "partials/thanks.html"})
    // Projects
    .when("/projects/:projectID/:name", { templateUrl: "partials/projectitem.html", controller: "ProjectCtrl" })
    // Tutorials
    .when("/tutorials/:tutorialID/:name", { templateUrl: "partials/tutorialitem.html", controller: "TutorialCtrl"})
    // Games
    .when("/games/minesweeper", { templateUrl: "games/minesweeper.html", controller: "MinesweeperCtrl" })
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html"});
}]);

app.directive('ngRightClick', function ($parse) {
    return function (scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function (event) {
            scope.$apply(function () {
                event.preventDefault();
                fn(scope, { $event: event });
            });
        });
    };
});