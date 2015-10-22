'use strict';

/**
 * @ngdoc overview
 * @name angularWorkspaceApp
 * @description
 * # angularWorkspaceApp
 *
 * Main module of the application.
 */
angular
  .module('spot', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'firebase',
    'ui.router'
  ])
  .config(mainConfig);

function mainConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .state('exercise', {
      url: '/exercise',
      params: {
        exercise: null,
        rest: null
      },
      templateUrl: 'views/exercise.html',
      controller: 'ExerciseCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    });
}
