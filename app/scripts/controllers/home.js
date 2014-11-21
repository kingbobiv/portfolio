'use strict';

/**
 * @ngdoc function
 * @name vpantanoApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the vpantanoApp
 */
angular.module('vpantanoApp')
  .controller('HomeCtrl', function ($scope, sections) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.sections = sections;
  });
