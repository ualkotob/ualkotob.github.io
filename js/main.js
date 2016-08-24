/* Main AngularJS Web Application*/
var app = angular.module('index', ['ngRoute']);

/* Configure the Routes*/
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "./partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", { templateUrl: "partials/about.html", controller: "PageCtrl" })
    .when("/projects", { templateUrl: "partials/projects.html", controller: "ProjectCtrl" })
    .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })
    .when("/sandbox", { templateUrl: "partials/sandbox.html", controller: "PageCtrl" })
    // Projects
    .when("/projects/:projectID/:name", { templateUrl: "partials/projectitem.html", controller: "ProjectCtrl" })
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/* Controls the Project Pages*/
app.controller('ProjectCtrl', function ($scope, $routeParams) {

    $scope.projectID = $routeParams.projectID;

    /* Temporary solution for loading images*/
    $scope.range = function (n) {
        return new Array(n);
    };

    $('.carousel').carousel({
        interval: 5000
    });

    $scope.projects =
        [
            {
                name: 'Unsteady',
                date: 'March 2013',
                status: 'Finished',
                technology: [
                            'C#',
                            'Visual Studio'
                ],
                description: "This is a game I created when I first found out you could clear the console in my first C# class. " + 
                            "This wasn't an assignment, just something for fun. It's a two player game where you control an army " +
                            "against each other. You have limited energy per turn and can spend it to move or use special abilities " +
                            "of varying costs. The gimmick is whenever you leave a space, it becomes destroyed, so it is sort of a turn " +
                            "based Tron game.",
                features: [
                            'Two player local play.',
                            'Keyboard Controls with WASD and SPACE.',
                            'Extensive option menu for contorlling every aspect of the game.'
                ]
            },
            {
                name: 'Final Project',
                date: 'December 2013',
                status: 'Finished',
                technology: [
                            'C#',
                            'Visual Studio',
                            'Unity',
                            'Inkscape'
                ],
                description: "I took a game development class during my senior year, and the final project  was any type of game we " +
                            "wanted to make using whatever technology we want. After some research I came across to Unity game engine " +
                            "and have been using it for many projects since. In this game you fight through randomly generated levels of " +
                            "enemies while collecting new equipment and upgrades. It was heavily inspired by The Binding of Isaac. ",
                features: [
                            'Endless randomly generated levels',
                            '3 different enemies',
                            '20 different pieces of equipment',
                            'Mouse and keyboard controls'
                ]
            },
            {
                name: 'Tutor Scheduling Database',
                date: 'July 2014',
                status: 'Finished',
                technology: [
                            'Microsoft Access',
                            'Visual Basic',
                            'SQL'
                ],
                description: "This a project I started back in 2012 and it evolved until I left Ivy Tech in 2014. I was tutor there from 2010 " +
                            "and I noticed the way they scheduled appointments was very inefficient. In 2012 I suggested they switch from " +
                            "the paper system they were using to an MS Access powered database I would create. They agreed and over the next " +
                            "few years they used the database I created and I continued to add features as they were requested/needed. They " +
                            "no longer use this database now, since it was replaced with a campus wide program, but I really enjoyed seeing " +
                            "people benefit from my work every day when they used it. This is when I started to get into databases and learned I " +
                            "enjoyed working with them.",
                features: [
                            'Full program for scheduling tutor appointments.',
                            'Find open appointments for specific classes with a quick search.',
                            'Shows details statistics tutors and apppointments.',
                            'Able to cancel appointments easily from the tutor or student page.',
                            'Also includes separate client for sign-in/out of students and tutors.'
                ]
            },
            {
                name: 'All The Buttons',
                date: 'July 2014',
                status: 'Finished',
                technology: [
                            'C#',
                            'Visual Studio',
                            'Unity',
                            'Inkscape'
                ],
                description: "I created this game in the month before starting for for Tata Consultancy Services. The goal was to create " +
                            "a simple game that I could take through all the stages of developing an android game. It is a collection of " +
                            "button themed score attack games complete with leaderboards and achievements. You can find it on the google " +
                            "play store using this link: https://play.google.com/store/apps/details?id=com.Umar.Buttons",
                features: [
                            '5 different games to choose from.',
                            'Casual and hardcore modes available.',
                            'Google play achievements and leaderboards.'
                ]
            },
            {
                name: 'Rogue Space',
                date: 'November 2014',
                status: 'On Hold',
                technology: [
                            'C#',
                            'Visual Studio',
                            'Unity',
                            'Inkscape'
                ],
                description: "This game is a pretty generic space shooter. You have a ship that will automatically shoot while moving " +
                            "toward your finger. Enemies will randomly spawn and drop random items. The featue I was focusing on was that " +
                            "you can equip a different weapon in each slot on your ship and this was meant to change " +
                            "how you played based on your combination. I stopped working on this one, since I was making content for it, but " +
                            "the core gameplay wasn't fun. I'll come back to this one when I figure out how to make it fun.",
                features: [
                            'Randomly generated enemies.',
                            'Weapon system allowing for two weapons at a time.',
                            'Randomly dropping power-ups making you stronger as you go.'
                ]
            },
            {
                name: 'Blobs',
                date: 'May 2015',
                status: 'Finished',
                technology: [
                            'C#',
                            'Visual Studio',
                            'Unity',
                            'Inkscape'
                ],
                description: "I made this game around the time agar.io started to become popular. It's basically a clone of it. " +
                            "It didn't have a mobile version at the time, so I wanted to see how difficult it would be to implement " +
                            "my own version of the game. It only took a few hours, and doesn't have many features. You play as a cell " +
                            "competing against 4 AI controlled opponents collecting bits and splitting to catch smaller cells. This was  " +
                            "the first time I created AI that dynamically reacted to what was around it.",
                features: [
                            'Single player vs 4 AI.',
                            'Touch controls with two finger press to split.',
                            'Just a demo with no menu and just a reset button.'
                ]
            },
            {
                name: 'Project Rocco',
                date: 'September 2015',
                status: 'On Hold',
                technology: [
                            'C#',
                            'Visual Studio',
                            'Unity',
                            'Inkscape'
                ],
                description: "I asked a friend of mine if they wanted to work on a game together, and they came up with this idea. " +
                            "you play as a ball moving through a set of traps in the level. The main feature is you can move from " +
                            "one side of screen the to the other by going off screen. There are lots of different traps in the demo. " +
                            "It is currently in the stage where we just need to create levels for it, so we are figuring the best way " +
                            "to do that.",
                features: [
                            'Move through traps to the end goal.',
                            'Many different traps to discover and master.',
                            'Robust customization options for color and player decal.',
                            'Features multiple endless modes.',
                ]
            },
            {
                name: 'Planet Defense',
                date: 'January 2016',
                status: 'On Hold',
                technology: [
                            'C#',
                            'Visual Studio',
                            'Unity',
                            'Inkscape'
                ],
                description: "This is just a proof of concept and not a playable game. The idea is you are in charge of defending a planet " +
                            "from enemies using a defense matrix that is wrapped around the planet. You can install different modules on " +
                            "each part to cutomize the defense. You then rotate the whole defense ring to aim at enemies coming toward the planet " +
                            "Sort of a tower defense game where you rotate the towers. This demo just includes rotating the ring and shooting the turrets " +
                            "by tapping them. The art for this game is beyond me, so it is on hold until I can find someone to do that art.",
                features: [
                            'Move defense ring to reposition turrets.',
                            'Shoot turrets at potential enemies.'
                ]
            }
        ];

});

/* Controls all other Pages */
app.controller('PageCtrl', function ($scope/*, $location, $http */) {

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })

});

