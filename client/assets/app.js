var friendsAPI = angular.module('friendsAPI', ['ngRoute']);

friendsAPI.config(function($routeProvider){
    $routeProvider
    .when('/new', {
        templateUrl: '/../partials/new.html'
    })
    .when('/edit/:_id', {
        templateUrl: '/../partials/edit.html'
    })
    .when('/friends/:_id', {
        templateUrl: '/../partials/show.html'
    })
    .otherwise({
        templateUrl: '/../partials/home.html'
    })
});