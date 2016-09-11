/* Tutorial Controller*/
angular.module('index').controller('TutorialCtrl', function ($scope, $http, $routeParams, $sce) {
    $scope.tutorialID = $routeParams.tutorialID;

    $scope.to_trusted = function (html_code) {
        return $sce.trustAsHtml(html_code);
    }

    $scope.tutorials =
       [
           {
               name: 'Prototypical Inheritance',
               summary: "Inheritance using objects instead of classes."
           },
           {
               name: 'The this Keyword',
               summary: "It refers to the owner of the function being executed."
           },
           {
               name: 'Function Hoisting',
               summary: "Object declarations are always moved to the top of the current scope at runtime."
           },
           {
               name: 'Callback Functions',
               summary: "Functions passed in as parameters of other functions."
           },
           {
               name: 'Functions as Data',
               summary: "Functions are considered data like other variables."
           },
           {
               name: 'Two Way Data Binding',
               summary: "When a variable can be changed in the UI and in the script."
           },
           {
               name: 'Dependency Injection',
               summary: "Having all a function's dependancies as parameters."
           },
           {
               name: 'Functional Programming',
               summary: "All function have the same output for the same input."
           }
       ];

    $scope.range = function (n) {
        return new Array(n);
    };
    //Put page content and index into tutorial array
    var getContent = function (i) {
        $http.get("tutorials/" + $scope.tutorials[i].name + ".html").success(function (data) {
            $scope.tutorials[i].content = data;
            $scope.tutorials[i].index = i;
        }
    )
    };
    for (var i = 0; i < $scope.tutorials.length; i++) {
        getContent(i);
    };
});