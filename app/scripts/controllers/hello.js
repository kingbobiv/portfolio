'use strict';

/**
 * @ngdoc function
 * @name vpantanoApp.controller:HelloCtrl
 * @description
 * # AboutCtrl
 * Controller of the vpantanoApp
 */
angular.module('vpantanoApp')
  .controller('HelloCtrl', function($scope, sections) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.section = sections.a;

  });