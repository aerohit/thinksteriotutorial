/* global app:true */

'use strict';
/**
 * @ngdoc overview
 * @name angnewsApp
 * @description
 * # angnewsApp
 *
 * Main module of the application.
 */
var app = angular.module('angnewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
]);

app.constant('FIREBASE_URL', 'https://popping-inferno-944.firebaseio.com/');

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});
