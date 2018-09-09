var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "public/views/main.html"
        })
        .when("/profile", {
            templateUrl: "public/views/profile.html",
            controller: 'profileCtrl'
        })
        .when("/cards", {
            templateUrl: "public/views/cards.html",
            controller:"cardCtrl"
        })
});



