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

    $scope.section = sections.hello;
  });