(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name vpantanoApp
   * @description
   * # vpantanoApp
   *
   * Main module of the application.
   */
  var vpantanoApp = angular
    .module('vpantanoApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
        .when('/hello', {
          templateUrl: 'views/hello.html',
          controller: 'HelloCtrl'
        })
        .when('/projects', {
          templateUrl: 'views/projects.html',
          controller: 'ProjectsCtrl'
        })
        .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

    vpantanoApp.run(function($rootScope) {
        $rootScope.globalFoo = function() {
            alert('I\'m global foo!');
        };
    });



})();