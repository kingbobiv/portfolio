'use strict';

/**
 * @ngdoc function
 * @name vpantanoApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the vpantanoApp
 */
angular.module('vpantanoApp')
  .controller('ProjectsCtrl', function ($scope, sections) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.section = sections.c;

  });
