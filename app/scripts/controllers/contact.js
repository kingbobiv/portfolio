'use strict';

/**
 * @ngdoc function
 * @name vpantanoApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the vpantanoApp
 */
angular.module('vpantanoApp')
  .controller('ContactCtrl', function ($scope, sections) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.section = sections.b;

  });
